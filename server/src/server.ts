const forceDatabaseRefresh = false;

import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import routes from "./routes/index.js";
import { sequelize } from "./models/index.js";
import path from "path";

const app = express();
const PORT = process.env.PORT || 3001;

// Serves static files in the entire client's dist folder
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.use(express.json());

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "client/dist")));

app.use(routes);

app.get("*", (__req, res) => {
  res.sendFile(path.join(__dirname, "client/dist", "index.html"));
});

sequelize.sync({ force: forceDatabaseRefresh }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
});
