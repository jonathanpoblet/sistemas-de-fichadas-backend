import { CompaniesModel } from '../models/companies.model.js';
import { SQLClient } from '../clients/sql.client.js';

export const companiesService = new CompaniesModel(SQLClient, 'companies');
