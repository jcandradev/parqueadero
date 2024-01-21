import express from "express";
import morgan from "morgan";
import dotenv from "dotenv";
import './database/connectdb.js'
import parqueRoutes from "./routes/parque.route.js ";

dotenv.config();

const app = express();
app.use(morgan("dev"));
app.use(express.json());

app.use("/parque", parqueRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`>>> Servidor corriendo en el puerto ${PORT}`);
});
