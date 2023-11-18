import express from "express";
import { config } from "dotenv";
import { connectToDb } from "./db/connectToDb.js";
import { productRouter } from "./routes/productRouter.js";
import cors from "cors";
config();
connectToDb();
const PORT = process.env.PORT || 3000;
const app = express();
app.use(
  cors({
    origin: [process.env.CLIENT_URL, "http://localhost:4173"],
    methods: ["POST", "GET", "UPDATE", "DELETE"],
    credentials: true,
  })
);
app.use(express.json());

app.use("/api/product", productRouter);
app.listen(PORT, () => console.log(`Server is listening on PORT: ${PORT} `));

export default app;
