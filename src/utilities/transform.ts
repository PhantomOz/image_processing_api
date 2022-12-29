import sharp from "sharp";
import fs, { promises as fsPromises } from "fs";
import path from "path";
import { transformResult } from "./interfaces";

const transform = async (
  filename: string,
  width: number,
  height: number
): Promise<transformResult> => {
  const filePath = path.join(__dirname, `../assets/full/${filename}.jpg`); //Input file location
  const outPath = path.join(
    __dirname,
    `../assets/thumb/${filename}-${width}x${height}.jpg`
  ); //output file location

  const file = await fsPromises.readFile(filePath); //get image file from location
  const outFile = fs.existsSync(outPath); //check if image file exists
  if (outFile) {
    return { code: "succeeded", message: outPath };
  }

  //transform file && save File to thumb directory
  await sharp(file)
    .resize(width, height)
    .toFile(outPath, (err, info) => {
      err ? console.log(err) : console.log(info);
    });

  return { code: "succeeded", message: outPath };
};

export default transform;
