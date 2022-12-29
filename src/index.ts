import express from 'express';
import apiRoute from './routes/index';
const app = express();

// Adding some middleware
app.use('/api/images', apiRoute);

app.get('/', (req, res) => {
  res.send('Hello, Welcome');
});
// listening on port 3000
app.listen(3000, () => {
  console.log(`Server listening on http://localhost:3000`);
});

// Export app for tesing
export default app;
