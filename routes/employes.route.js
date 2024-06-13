import { Router } from 'express';

export const routerEmployes = Router();

routerEmployes.get('/', (req, res) => {
  try {
    res.json({
      employes: [],
    });
  } catch (error) {
    res.status(500).json({ error: error });
  }
});
