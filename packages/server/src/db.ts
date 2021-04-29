import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../config.env') });

const sequelize = new Sequelize(
  // process.env.DB_NAME as string,
  // process.env.DB_USER as string,
  // process.env.DB_PASSWORD as string,
  process.env.DB_URI as string,
  {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT as number | undefined,
    // username: process.env.DB_USER,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_NAME,
  }
);

export { sequelize };
