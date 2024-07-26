export class ClocksModel {
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
        .select(
          'clocks.*',
          this.client.raw("CONCAT(employes.name, ' ', employes.lastname) AS employe"),
          this.client.raw(
            "DATE_FORMAT(CONVERT_TZ(clocks.date, '+00:00', '-00:00'), '%Y-%m-%d %H:%i:%s') AS date"
          ),
          'offices.branch',
          'companies.company'
        )
        .join('employes', 'employes.id_employe', 'clocks.id_employe')
        .join('offices', 'offices.id_office', 'clocks.id_office')
        .join('companies', 'clocks.id_office', 'companies.id_company')
        .orderByRaw("CONVERT_TZ(clocks.date, '+00:00', '-00:00') DESC");
      return query;
    } catch (error) {
      throw new Error(`Can not get all: ${error.message}`);
    }
  }

  async addClock({ id_employe, lat, lon, date }) {
    try {
      const query = await this.client(this.table).insert({
        id_employe,
        lat,
        lon,
        date,
      });
      return query;
    } catch (error) {
      throw new Error(`Can not get all: ${error}`);
    }
  }
}
