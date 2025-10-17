import express from "express";
import dotenv from "dotenv";
import { verifyApiKey } from "../middlewares/apiKeyMiddleware.js";
import {
  getClients,
  createClient,
  getClientById,
  updateClient,
  deleteClient
} from "../controllers/client.controller.js";

dotenv.config();

const router = express.Router();

// Apply middleware to all routes if configured that way
if(process.env.SECURE_METHOD == "API_KEY"){
    router.use(verifyApiKey);
}

router.get("/", getClients);
router.post("/", createClient);
router.get("/:id", getClientById);
router.put("/:id", updateClient);
router.delete("/:id", deleteClient);

export default router;
