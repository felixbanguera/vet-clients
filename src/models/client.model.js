import mongoose from "mongoose";

const clienteSchema = new mongoose.Schema({
  name: { type: String, required: true },
  phone: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  address: { type: String },
  active: { type: Boolean },
  pets: [ Number ],
}, { timestamps: true });

export default mongoose.model("Client", clienteSchema);