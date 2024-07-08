import { companiesService } from '../services/companies.service.js';

export async function controllerGetCompanies(req, res, next) {
  try {
    const companies = await companiesService.getAll();
    res.json(companies);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
