import { employesService } from '../services/employes.service.js';

export async function controllerGetEmployes(req, res, next) {
  try {
    const employes = await employesService.getAll();
    res.json(employes);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
