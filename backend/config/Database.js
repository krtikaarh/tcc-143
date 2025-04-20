import { Sequelize } from "sequelize";

const db = new Sequelize("RECOVER_YOUR_DATA", "root", "root1234", {
  host: "34.60.175.254",
  dialect: "mysql",
});

export default db;