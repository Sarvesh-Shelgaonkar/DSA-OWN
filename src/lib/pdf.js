/**
 * Client-side PDF text extraction using pdfjs-dist.
 * The file never leaves the browser — we only send the extracted text to the API.
 * pdfjs is imported dynamically so it stays out of the main bundle.
 */
export async function extractPdfText(file, { maxChars = 20000 } = {}) {
  const pdfjs = await import('pdfjs-dist');
  const workerSrc = (await import('pdfjs-dist/build/pdf.worker.min.mjs?url')).default;
  pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

  const buffer = await file.arrayBuffer();
  const pdf = await pdfjs.getDocument({ data: buffer }).promise;

  let text = '';
  for (let i = 1; i <= pdf.numPages; i += 1) {
    const page = await pdf.getPage(i);
    const content = await page.getTextContent();
    const pageText = content.items.map((item) => item.str).join(' ');
    text += `${pageText}\n`;
    if (text.length > maxChars) break;
  }

  return text.replace(/\s+\n/g, '\n').replace(/[ \t]{2,}/g, ' ').trim().slice(0, maxChars);
}
