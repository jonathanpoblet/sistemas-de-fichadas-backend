import express from 'express';
import cors from 'cors';
import { routerEmployes } from './routes/employes.route.js';
import { PORT } from './config/config.js';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: {} }));

app.get('/', (req, res) => {
  res.json({ ok: 200 });
});

app.use('/api/employes', routerEmployes);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
