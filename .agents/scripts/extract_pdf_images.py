import fitz
import os

pdf_path = "attached_assets/Company_Profile_new_1785054662439.pdf"
pages_dir = ".agents/outputs/pdf-pages"
images_dir = ".agents/outputs/pdf-images"

os.makedirs(pages_dir, exist_ok=True)
os.makedirs(images_dir, exist_ok=True)

doc = fitz.open(pdf_path)
print(f"Total pages: {doc.page_count}")

# Render all pages at zoom=2 for viewing
for i in range(doc.page_count):
    page = doc[i]
    pix = page.get_pixmap(matrix=fitz.Matrix(2, 2))
    out_path = f"{pages_dir}/page_{i+1:02d}.png"
    pix.save(out_path)
    print(f"Rendered page {i+1} -> {out_path} ({pix.width}x{pix.height})")

# Extract embedded images at full resolution
img_count = 0
for page_num in range(doc.page_count):
    page = doc[page_num]
    images = page.get_images(full=True)
    for img_index, img in enumerate(images):
        xref = img[0]
        try:
            base_image = doc.extract_image(xref)
            img_bytes = base_image["image"]
            img_ext = base_image["ext"]
            width = base_image["width"]
            height = base_image["height"]
            # Only save images that are reasonably large (not tiny icons)
            if width > 80 and height > 80:
                img_count += 1
                out_path = f"{images_dir}/page{page_num+1:02d}_img{img_index+1:02d}_{width}x{height}.{img_ext}"
                with open(out_path, "wb") as f:
                    f.write(img_bytes)
                print(f"  Extracted image {img_count}: {out_path}")
        except Exception as e:
            print(f"  Could not extract image xref={xref}: {e}")

print(f"\nDone. Extracted {img_count} embedded images.")
doc.close()
