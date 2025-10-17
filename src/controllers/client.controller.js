import Client from "../models/client.model.js";

export const getClients = async (req, res) => {
  try {
    console.log("getClients>>>>>")
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ mensaje: "Error al obtener los clientes" });
  }
};

export const createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ mensaje: "Error al crear el cliente: ", error: error.message });
  }
};

export const getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    console.log("getClientById id:", req.params.id)
    console.log("getClientById client:", client)
    if (!client) return res.status(404).json({ mensaje: "Cliente no encontrado" });
    res.json(client);
  } catch {
    res.status(400).json({ mensaje: "ID inválido" });
  }
};

export const updateClient = async (req, res) => {
  try {
    const updatedClient = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    console.log("updateClient id:", req.params.id)
    console.log("updateClient updatedClient:", updatedClient)
    if (!updatedClient) return res.status(404).json({ mensaje: "Client no encontrado" });
    res.json(updatedClient);
  } catch {
    res.status(400).json({ mensaje: "Error al actualizar el client" });
  }
};

export const deleteClient = async (req, res) => {
  try {
    const deletedClient = await Client.findByIdAndDelete(req.params.id);
    if (!deletedClient) return res.status(404).json({ mensaje: "Client no encontrado" });
    res.json({ mensaje: "Client eliminado correctamente" });
  } catch {
    res.status(400).json({ mensaje: "Error al eliminar el client" });
  }
};
