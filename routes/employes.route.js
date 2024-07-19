import { Router } from 'express';
import {
  controllerGetEmployeById,
  controllerGetEmployes,
} from '../controllers/employes.controller.js';

export const routerEmployes = Router();

routerEmployes.get('/', controllerGetEmployes);
routerEmployes.get('/:id', controllerGetEmployeById);
