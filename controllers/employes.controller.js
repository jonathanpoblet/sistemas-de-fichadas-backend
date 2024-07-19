import { employesService } from '../services/employes.service.js';

export async function controllerGetEmployes(req, res, next) {
  try {
    const employes = await employesService.getAll();
    res.json(employes);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

export async function controllerGetEmployeById(req, res, next) {
  try {
    const id = req.params.id;
    const employe = await employesService.getById(id);

    if (employe.length !== 0) res.json(employe[0]);
    else res.status(404).json({ message: 'Employee not found' });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
