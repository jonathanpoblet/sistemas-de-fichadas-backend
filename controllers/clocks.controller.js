import { clocksService } from '../services/clocks.service.js';

export async function controllerGetClocks(req, res, next) {
  try {
    const clocks = await clocksService.getAll();
    res.json(clocks);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
