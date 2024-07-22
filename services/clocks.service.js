import { ClocksModel } from '../models/clocks.model.js';
import { SQLClient } from '../clients/sql.client.js';

export const clocksService = new ClocksModel(SQLClient, 'clocks');
