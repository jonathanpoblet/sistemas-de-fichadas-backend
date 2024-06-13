import express from 'express';
import cors from 'cors';

export const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: {} }));

app.get('/', (req, res) => {
  res.json({ ok: 200 });
});

app.listen(3000, () => {
  console.log(`Listening on port: ${3000}`);
});
