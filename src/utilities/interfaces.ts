interface CacheImage {
  filename: string;
  width: number;
  height: number;
  outPath: string;
}
interface transformResult {
  code: string;
  message: string;
}
export { CacheImage, transformResult };
