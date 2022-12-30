import { Request, Response, NextFunction } from 'express';

const logger = (req: Request, res: Response, next: NextFunction): void => {
  const { filename, width, height } = req.query;
  filename && width && height
    ? next()
    : res.status(401).send('Problem Provide Filename width and height');
};

export default logger;
