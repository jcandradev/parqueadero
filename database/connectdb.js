import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

try {
  mongoose.set("strictQuery", false)
  mongoose.connect(process.env.MONGO_URI)
  console.log(">>> Base de Datos Conectada");
} catch (error) {
  console.log("Error al conectar la base de datos", error);
  process.exit(1);
}