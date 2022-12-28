import sharp from "sharp";
import { promises as fs } from "fs";
import path from "path";
import { transformResult } from "./interfaces";

const transform = async (
  filename: unknown,
  width: number,
  height: number
): Promise<transformResult> => {
  const filePath = path.join(__dirname, `../assets/full/${filename}.jpg`);
  const outPath = path.join(
    __dirname,
    `../assets/thumb/${filename}-${width}x${height}.jpg`
  );

  try {
    const file = await fs.readFile(filePath);
    await sharp(file)
      .resize(width, height)
      .toFile(outPath, (err, info) => {
        err ? console.log(err) : console.log(info);
      });
  } catch (e: any) {
    // console.log(e);
    return { code: e.code, message: "wahala" };
  }
  return { code: "succeeded", message: outPath };
};

export default transform;
