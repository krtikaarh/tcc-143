import { Sequelize } from "sequelize";

// Gunakan variabel lingkungan yang sudah diset di Cloud Run
const db = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  dialect: "mysql",
  dialectOptions: {
    socketPath: `/cloudsql/${process.env.CLOUD_SQL_CONNECTION_NAME}`,  // Menggunakan socket path Cloud SQL
  },
  logging: false,
});

export default db;
