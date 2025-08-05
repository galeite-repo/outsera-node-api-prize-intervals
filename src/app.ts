import express from 'express';
import movieRoutes from './routes/movie.route';

const app = express();

app.use(express.json());
app.use('/', movieRoutes);

export default app;
