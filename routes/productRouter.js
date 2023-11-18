import { Router } from "express";
import {
  createProduct,
  deleteAllProdcuts,
  getAllProducts,
} from "../controllers/productController.js";

const router = Router();

router.post("/create", createProduct);
router.get("/", getAllProducts);
router.delete("/deleteAll", deleteAllProdcuts);

export { router as productRouter };
