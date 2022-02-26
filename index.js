import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import errorHandler from "./middlewares/errorMiddleware.js";
import userRouter from "./routes/userRoutes.js";
import jjsFreightRouter from "./routes/jjsFreightRoutes.js";
import costSheetRouter from "./routes/costSheetRoutes.js";
import addInvoiceRouter from "./routes/addInvoiceRoutes.js";
import paymentVoucherRouter from "./routes/paymentVoucherRoutes.js";
import receiptVoucherRouter from "./routes/receiptVoucherRoutes.js";

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
app.use("/api", jjsFreightRouter);
app.use("/api", costSheetRouter);
app.use("/api", addInvoiceRouter);
app.use("/api", paymentVoucherRouter);
app.use("/api", receiptVoucherRouter);

// Listning to port
app.listen(port, () => console.log(`Server started on port ${port}`));
