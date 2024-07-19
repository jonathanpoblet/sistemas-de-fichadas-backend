import { employesService } from '../services/employes.service.js';
import { employeFields } from '../utils/employeFields.js';

export async function controllerGetEmployes(req, res, next) {
  try {
    //Search Employes
    const employes = await employesService.getAll();
    res.json(employes);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

export async function controllerGetEmployeById(req, res, next) {
  try {
    //Search Employe
    const id = req.params.id;
    const employe = await employesService.getById(id);

    //Return Employe
    if (employe.length !== 0) res.json(employe[0]);
    else res.status(404).json({ message: 'Employee not found' });
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

export async function controllerUpdateEmployeById(req, res, next) {
  try {
    //Fields Validation
    const fields = Object.keys(req.body);
    const hasInvalidField = fields.some(field => !employeFields.includes(field));

    if (hasInvalidField) {
      return res.status(400).json({ message: 'Bad Employe Field' });
    }

    //Search Employe
    const id = req.body.id_employe;
    const employe = await employesService.getById(id);

    //Update Employe
    if (employe.length !== 0) {
      const updatedFields = req.body;
      const updatedEmploye = await employesService.updateById(updatedFields);
      res.json(updatedEmploye[0]);
    } else res.status(404).json({ message: 'Employee not found' });
  } catch (error) {
    console.log(error);
    res.status(500).send('Internal Server Error');
  }
}
