import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import { userRoutes } from './app/modules/user/user.route';
const app: Application = express();
//parser
app.use(express.json());
app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
});
app.use('/api', userRoutes);
app.use('/api', userRoutes);
app.use('/api', userRoutes);
app.use('/api', userRoutes);
app.use('/api', userRoutes);
export default app;
