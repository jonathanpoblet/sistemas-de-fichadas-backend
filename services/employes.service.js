import { EmployesModel } from '../models/employes.model.js';
import { SQLClient } from '../clients/sql.client.js';

export const employesService = new EmployesModel(SQLClient, 'employes');
