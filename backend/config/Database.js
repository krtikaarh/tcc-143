import { Sequelize } from "sequelize";

const db = new Sequelize("webnotes", "root", " ", {
  dialect: "mysql",
  dialectOptions: {
    socketPath: "/cloudsql/mimetic-sweep-450606-j0:us-central1:tcc",
  },
  logging: false,
});

export default db;
