import { Router } from 'express';
import { controllerGetEmployes } from '../controllers/employes.controller.js';

export const routerEmployes = Router();

routerEmployes.get('/', controllerGetEmployes);
