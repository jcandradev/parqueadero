import { Parque } from "../models/parque.model.js";

export const registroParque = async (req, res) => {
  const { placa, numero_serie, modelo, marca, kilometraje, tipo } = req.body;
  try {
    const nuevoParque = new Parque({ placa, numero_serie, modelo, marca, kilometraje, tipo });
    await nuevoParque.save();
    return res.status(201).json({
      message: "Registro exitoso",
      data: nuevoParque
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al registrar el vehiculo",
      data: {}
    });
  }
}

