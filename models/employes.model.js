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
      const query = await this.client(this.table).select('*');
      return query;
    } catch (error) {
      throw new Error(`Can not get all: ${error}`);
    }
  }
}
