import mongoose, { model } from "mongoose";

const parqueSchema = new mongoose.Schema({
  //placa, número serie,  modelo, marca, kilometraje, tipo
  placa: {
    type: String,
    required: true
  },
  numero_serie: {
    type: String,
    required: true
  },
  modelo: {
    type: String,
    required: true
  },
  marca: {
    type: String,
    required: true
  },
  kilometraje: {
    type: Number,
    required: true
  },
  tipo: {
    type: String,
    required: true
  }
});

export const Parque = model("Parque", parqueSchema);
