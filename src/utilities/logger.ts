const logger = (req: any, res: any, next: any): void => {
  const { filename, width, height } = req.query;
  filename && width && height
    ? next()
    : res.status(301).send("Problem Provide Filename width and height");
};

export default logger;
