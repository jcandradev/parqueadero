import { Parque } from "../models/parque.model.js";

// funcion para registrar un vehiculo
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
      error: error.message
    });
  }
}
// funcion que busca un vehiculo si viene el ID si no lista todos lo vehiculos
export const listarParques = async (req, res) => {
  const { id } = req.body;
  if (id) {
    try {
      const parque = await Parque.findById(id);
      return res.status(200).json({
        parque: parque
      });
    } catch (error) {
      return res.status(500).json({
        message: "Error al obtener el vehiculo",
        error: error.message
      });
    }
  }

  try {
    const parques = await Parque.find();
    return res.status(200).json({
      parques: parques
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error al obtener los vehiculos",
      error: error.message
    });
  }
}

//funcion que elimina un vehiculo
export const eliminarParque = async (req, res) => {
  const { id } = req.body
  try {
    const parque = await Parque.findByIdAndDelete(id)
    return res.status(200).json({
      message: "Eliminación exitosa"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error al eliminar el vehiculo",
      error: error.message
    })
  }
}

//funcion que actualiza un vehiculo
export const actualizarParque = async (req, res) => {
  const { id, placa, numero_serie, modelo, marca, kilometraje, tipo } = req.body;
  try {
    const parque = await Parque.findByIdAndUpdate(id, { placa, numero_serie, modelo, marca, kilometraje, tipo })
    return res.status(200).json({
      message: "Actualización exitosa"
    })
  } catch (error) {
    return res.status(500).json({
      message: "Error al actualizar el vehiculo",
      error: error.message
    })
  }
}