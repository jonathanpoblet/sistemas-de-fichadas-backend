import { Router } from 'express';
import { controllerGetClocks } from '../controllers/clocks.controller.js';

export const routerClocks = Router();

routerClocks.get('/', controllerGetClocks);
