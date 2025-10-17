import dotenv from "dotenv";
dotenv.config();

// Simple way of securing a bit the microservice

export const verifyApiKey = (req, res, next) => {
  const apiKey = req.header("x-api-key");

  console.log("apiKey: ", apiKey)
  console.log("process.env.VET_API_KEY: ", process.env.VET_API_KEY)

  if (!apiKey || apiKey !== process.env.VET_API_KEY) {
    return res.status(403).json({ message: "Access denied: Invalid or missing API key" });
  }

  next(); // Continue if valid
};
