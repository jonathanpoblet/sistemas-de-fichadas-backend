import { Router } from 'express';
import { controllerGetClocks, controllerPostClock } from '../controllers/clocks.controller.js';

export const routerClocks = Router();

routerClocks.get('/', controllerGetClocks);
routerClocks.post('/', controllerPostClock);
