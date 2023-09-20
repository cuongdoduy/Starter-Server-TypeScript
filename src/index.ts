import express from 'express';
import routes from './routes/index';
const app: express.Application = express();
const port: number = 3000; // Default port

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello World!');
});

// Use routes
app.use('/api', routes);

// Start server
app.listen(port, (): void => {
  console.log(`App listening on port ${port}`);
});
export default app;