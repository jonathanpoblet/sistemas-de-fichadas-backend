import dotenv from 'dotenv';

dotenv.config();

export const mysqlConfig = {
  client: 'mysql2',
  connection: 'mysql://root@localhost:3306/test',
};

export const PORT = process.env.PORT;
