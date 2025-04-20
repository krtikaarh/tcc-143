import { Sequelize } from "sequelize";

const db = new Sequelize("webnotes", "root", " ", {
  host: "34.60.175.254",
  dialect: "mysql",
});

export default db;