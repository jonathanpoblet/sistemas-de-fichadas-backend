import { clocksService } from '../services/clocks.service.js';
import { getDateTime } from '../utils/getDateTime.js';

export async function controllerGetClocks(req, res, next) {
  try {
    const clocks = await clocksService.getAll();
    res.json(clocks);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}

export async function controllerPostClock(req, res, next) {
  try {
    const { id_employe, lat, lon } = req.body;

    if (!id_employe || !lat || !lon)
      return res.status(400).json({ message: 'Missing Clock Fields' });

    if (typeof lat !== 'number' || isNaN(lat))
      return res.status(400).json({
        message: 'Latitude must be number',
      });

    if (typeof lon !== 'number' || isNaN(lon))
      return res.status(400).json({
        message: 'Longitude must be number',
      });

    const date = getDateTime();

    const clocks = await clocksService.addClock({ id_employe, lat, lon, date });
    res.json(clocks);
  } catch (error) {
    res.status(500).send('Internal Server Error');
  }
}
