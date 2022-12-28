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
  let createFile: Promise<transformResult> = transform(
    filename,
    Number(width),
    Number(height)
  );
  createFile.then((result) => {
    const path = result.message;

    //Server the Transformed Image to the browser
    result.code === "succeeded" && displayImage(path, res);

    //Serves a badrequest when the file cannot be found
    result.code === "ENOENT" &&
      res.status(404).send(`<h1>Can't Locate the image ${filename}.jpg </h1>`);
  }); //capture the path of the processed image
});

// export router
export default router;
