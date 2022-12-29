import { Router } from "express";
import logger from "../utilities/logger";
import transform from "../utilities/transform";
import { transformResult } from "../utilities/interfaces";
import displayImage from "../utilities/displayImage";

// initialize router
const router = Router();

//create get route
router.get("/?", logger, (req, res) => {
  // getting filename, width, and height from query string
  const { filename, width, height } = req.query;

  //Initiate Image Transformation
  const createFile: Promise<transformResult> = transform(
    String(filename),
    Number(width),
    Number(height)
  );
  createFile
    .then((result) => {
      //get the image path from result
      const path = result.message;

      //Server the Transformed Image to the browser
      displayImage(path, res);
    }) //capture the path of the processed image
    .catch(() =>
      res.status(404).send(`<h1>Can't Locate the image ${filename}.jpg </h1>`)
    ); //Gives out error 404 when the file cannot be found in the full directory
});

// export router
export default router;
