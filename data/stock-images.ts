import stockImagesJson from "./stock-images.json";

export type StockImage = {
  id: string;
  url: string;
  alt: string;
};

export const stockImages: StockImage[] = stockImagesJson;

export const stockImageUrls = stockImages.map((image) => image.url);
