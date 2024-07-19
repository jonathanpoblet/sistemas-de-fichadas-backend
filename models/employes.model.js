export class EmployesModel {
  constructor(SQLClient, table) {
    if (!SQLClient) {
      throw new Error('SQLClient is required');
    }
    if (!table) {
      throw new Error('Table name is required');
    }

    this.client = SQLClient;
    this.table = table;
  }

  async getAll() {
    try {
      const query = await this.client(this.table)
        .select('employes.*', 'companies.company')
        .join('companies', 'employes.id_company', 'companies.id_company');
      return query;
    } catch (error) {
      throw new Error(`Can not get all: ${error}`);
    }
  }

  async getById(id) {
    try {
      const query = await this.client(this.table)
        .select('employes.*', 'companies.company')
        .join('companies', 'employes.id_company', 'companies.id_company')
        .where('id_employe', id);
      return query;
    } catch (error) {
      throw new Error(`Can not get employe with id ${id} : ${error}`);
    }
  }

  async updateById(updatedFields) {
    const id = updatedFields.id_employe;
    try {
      await this.client(this.table).where('id_employe', id).update(updatedFields);

      const updatedEmploye = await this.getById(id);
      return updatedEmploye;
    } catch (error) {
      throw new Error(`Can not get employe with id ${id} : ${error}`);
    }
  }
}
