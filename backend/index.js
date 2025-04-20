import express from "express";
import cors from "cors";
import route from './routes/UserRoute.js';

const app = express();
const port = process.env.PORT | 5000;

app.use(cors());
app.use(express.json());
app.use(route);

app.get('/', (req, res) => {
    res.send('API is running ✅');
  });

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});