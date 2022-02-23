import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import userRouter from "./routes/userRoutes.js";

// Configurations
dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(errorHandler);

// Routes
app.use("/api/users", userRouter);

// Listning to port
app.listen(port, () => console.log(`Server started on port ${port}`));
