import { Router } from 'express';
import {
  controllerGetEmployeById,
  controllerGetEmployes,
  controllerUpdateEmployeById,
} from '../controllers/employes.controller.js';

export const routerEmployes = Router();

routerEmployes.get('/', controllerGetEmployes);
routerEmployes.get('/:id', controllerGetEmployeById);
routerEmployes.put('/', controllerUpdateEmployeById);
