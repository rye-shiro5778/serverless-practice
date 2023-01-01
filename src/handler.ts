import express from 'express';
import serverless from 'serverless-http';
const app = express();

app.get('/', (_req, res, _next) => {
  return res.status(200).json({
    message: 'Hello from root!',
  });
});

app.get('/hello', (_req, res, _next) => {
  return res.status(200).json({
    message: 'Hello from path!',
  });
});

app.use((_req, res, _next) => {
  return res.status(404).json({
    error: 'Not Found',
  });
});

export const handler = serverless(app);
