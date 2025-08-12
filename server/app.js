import express from "express";
import dotenv from "dotenv";
import connectToDB from './config/mongodb.js';
import productRoutes from "./routes/productRoutes.js";

const app = express();
dotenv.config();

connectToDB();

app.use(express.json());

app.use('/api/product', productRoutes);




export default app;