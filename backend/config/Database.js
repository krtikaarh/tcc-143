import { Sequelize } from "sequelize";

const db = new Sequelize("webnotes", "root", "", {
  host: "34.60.175.254",
  dialect: "mysql",
  port: 3306,
  logging: false,
});

export default db;
