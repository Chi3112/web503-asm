import express from 'express';
import mongoose from 'mongoose';
import productRoute from '../src/routers/product'
const app = express();
app.use(express.json());
app.use("/api", productRoute);

mongoose.connect('mongodb://127.0.0.1:27017/asm1');
export const viteNodeApp = app;