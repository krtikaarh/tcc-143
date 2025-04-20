import express from "express";
import cors from "cors";
import route from './routes/UserRoute.js';
import db from './config/Database.js';

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(route);

db.authenticate()
  .then(() => console.log("✅ Database connected"))
  .catch((err) => console.error("❌ Database connection error:", err));

app.get('/', (req, res) => {
    res.send('API is running ✅');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});