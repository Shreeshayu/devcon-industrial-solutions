export interface ConversationContext {
  lastIntent: string | null;
  selectedBrand: string | null;
  selectedProduct: string | null;
  selectedIndustry: string | null;
  awaitingResponse: string | null;
}

export const initialContext: ConversationContext = {
  lastIntent: null,
  selectedBrand: null,
  selectedProduct: null,
  selectedIndustry: null,
  awaitingResponse: null,
};
