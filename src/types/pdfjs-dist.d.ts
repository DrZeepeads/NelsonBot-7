declare module 'pdfjs-dist' {
  export const getDocument: (src: string | { url: string }) => {
    promise: Promise<PDFDocumentProxy>;
  };

  export interface PDFDocumentProxy {
    numPages: number;
    getPage: (pageNumber: number) => Promise<PDFPageProxy>;
  }

  export interface PDFPageProxy {
    getTextContent: () => Promise<PDFTextContent>;
  }

  export interface PDFTextContent {
    items: PDFTextItem[];
  }

  export interface PDFTextItem {
    str: string;
  }
}