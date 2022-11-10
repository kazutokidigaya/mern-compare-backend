import express from "express";
import cors from "cors";
import connectToMongo from "./config/db.js";
import compareRoutes from "./routes/compareRoutes.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 9000;

connectToMongo();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("api is running");
});

app.use("/api/v1", compareRoutes);

app.listen(PORT, () => {
  console.log(`api is runin on http://localhost:${PORT}`);
});
