import { Response } from 'express';
import fs from 'fs';

const displayImage = async (path: string, res: Response) => {
  await fs.readFile(path, (err, data) => {
    if (err) {
      res.status(200).send('Processing Image....');
    } // Fail if the file can't be read.
    else {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' });
      res.end(data); // Send the file data to the browser})
    }
  });
};

export default displayImage;
