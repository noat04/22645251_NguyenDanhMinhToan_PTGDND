import dotenv from "dotenv";
import express from "express";
import mongoose from "mongoose";
import Product from "./src/models/Products.js"; // Sử dụng đúng đường dẫn và cú pháp ES Module

// Load biến môi trường từ file .env
dotenv.config();

const app = express();
// mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
const port = process.env.PORT || 3000;

// Kết nối MongoDB
mongoose.connect(process.env.MONGO_URI)
    .then(() => console.log("MongoDB connected"))
    .catch((err) => console.error("MongoDB connection error:", err));


// Middleware để parse JSON
app.use(express.json());

// Định nghĩa route cơ bản
app.get("/", (req, res) => {
    res.send("Welcome to Product API with MongoDB!");
});

// Lấy danh sách sản phẩm (GET /products)
app.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Lấy chi tiết một sản phẩm (GET /products/:id)
app.get("/products/:id", async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Thêm sản phẩm mới (POST /products)
app.post("/products", async (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) return res.status(400).json({
            message:
                "Invalid input"
        });
        const newProduct = new Product({ name, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Signup
app.post("/signup", async (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) return res.status(400).json({
            message:
                "Invalid input"
        });
        const newProduct = new Product({ name, price });
        await newProduct.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Cập nhật sản phẩm (PUT /products/:id)
app.put("/products/:id", async (req, res) => {
    try {
        const { name, price } = req.body;
        const product = await Product.findByIdAndUpdate(
            req.params.id,
            { name, price },
            { new: true }
        );
        if (!product) return res.status(404).json({
            message: "Product not found"
        });
        res.json(product);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});
//Xóa sản phẩm (DELETE /products/:id)
app.delete("/products/:id", async (req, res) => {
    try {
        const product = await
            Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({
            message: "Product not found"
        });
        res.json({ message: "Product deleted" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Khởi động server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});





