import express from "express";
import compareController from "../controllers/compareController.js";

const router = express.Router();

router.get("/products", compareController.getAllProducts);
router.post("/products", compareController.addNewProducts);
router.get("/products/:id", compareController.getSingleData);

export default router;
