import { Router } from 'express';
import { controllerGetCompanies } from '../controllers/companies.controller.js';

export const routerCompanies = Router();

routerCompanies.get('/', controllerGetCompanies);
