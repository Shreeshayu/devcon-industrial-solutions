import { knowledge } from "./knowledge";
import { INTENTS } from "./intents";
import { SYNONYMS } from "./synonyms";
import { FALLBACK_MESSAGE } from "./messages";
import { ConversationContext } from "./context";
import { normalizeText, tokenize, containsPhrase } from "./textProcessor";
export interface ChatResponse {
  response: string;
  intent: string | null;
}

function similarityScore(input: string, keywords: string[]): number {
  let score = 0;

  for (const keyword of keywords) {
    if (input.includes(keyword)) {
      score += keyword.length;
    }
  }

  return score;
}

function expandInput(input: string): string {
  let expanded = normalizeText(input);

  for (const [baseWord, synonyms] of Object.entries(SYNONYMS)) {
    for (const synonym of synonyms) {
      if (expanded.includes(synonym)) {
        expanded += ` ${baseWord}`;
      }
    }
  }

  return expanded;
}
function detectIntent(input: string): string | null {
  const normalized = expandInput(input);

  let bestIntent: string | null = null;
  let highestScore = 0;

  for (const intent of INTENTS) {
    let score = 0;

    for (const keyword of intent.keywords) {
      if (containsPhrase(normalized, keyword)) {
        score += keyword.split(" ").length * 10;
      } else {
        const words = keyword.split(" ");

        for (const word of words) {
          if (normalized.includes(word)) {
            score += 2;
          }
        }
      }
    }

    if (score > highestScore) {
      highestScore = score;
      bestIntent = intent.name;
    }
  }

  return bestIntent;
}
const BLOCKED_TOPICS = [
  "weather",
  "cricket",
  "ipl",
  "movie",
  "movies",
  "politics",
  "prime minister",
  "president",
  "football",
  "bitcoin",
  "crypto",
  "stock",
  "share market",
  "recipe",
  "joke",
  "song",
  "lyrics",
  "netflix",
];

function isOutOfScope(input: string): boolean {
  const text = normalizeText(input);

  return BLOCKED_TOPICS.some((topic) => text.includes(topic));
}
export function getResponse(input: string): ChatResponse {
  const normalized = normalizeText(input);
  if (isOutOfScope(normalized)) {
    return {
      response: `I'm here to assist with Devcon Industrial Solutions, including our products, brands, services, quotations, and contact information.

    Please ask me anything related to Devcon, and I'll be happy to help.`,
      intent: null,
    };
  }

  const detectedIntent = detectIntent(input);
  if (detectedIntent) {
    const intentEntry = knowledge.find(
      (entry) => entry.intent === detectedIntent,
    );

    if (intentEntry) {
      return {
        response: intentEntry.response,
        intent: detectedIntent,
      };
    }
  }

  // Continue with existing keyword scoring if no intent response is found.

  let bestMatch = null;
  let highestScore = 0;

  for (const entry of knowledge) {
    const score = similarityScore(normalized, entry.keywords);

    if (score > highestScore) {
      highestScore = score;
      bestMatch = entry;
    }
  }

  if (bestMatch) {
    return {
      response: bestMatch.response,
      intent: bestMatch.intent,
    };
  }

  return {
    response: FALLBACK_MESSAGE,
    intent: null,
  };
}
