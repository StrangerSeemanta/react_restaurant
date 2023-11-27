import { extractColorsFromImage } from "extract-colors";
export async function ExtractColor(imageSrc: HTMLImageElement) {
  const prominentColor = await extractColorsFromImage(imageSrc, {
    pixels: 1000000,
    lightnessDistance: 0.1,
  });
  return prominentColor;
}
