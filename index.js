const express = require("express");
const colors = require("colors");
const dotenv = require("dotenv");
const connectDB = require("./config/db.js");
const errorHandler = require("./middlewares/errorMiddleware.js");
const userRouter = require("./routes/userRoutes.js");
const jjsFreightRouter = require("./routes/jjsFreightRoutes.js");
const costSheetRouter = require("./routes/costSheetRoutes.js");
const addInvoiceRouter = require("./routes/addInvoiceRoutes.js");
const paymentVoucherRouter = require("./routes/paymentVoucherRoutes.js");
const receiptVoucherRouter = require("./routes/receiptVoucherRoutes.js");
const jobNoRouter = require("./routes/jobNoRoutes.js");
const saveAs = require("file-saver");

// Configurations
dotenv.config();
const app = express();
connectDB();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/users", userRouter);
app.use("/api", jjsFreightRouter);
app.use("/api", costSheetRouter);
app.use("/api", addInvoiceRouter);
app.use("/api", paymentVoucherRouter);
app.use("/api", receiptVoucherRouter);
app.use("/api", jobNoRouter);

app.use(errorHandler);

// Listning to port
app.listen(port, () => console.log(`Server started on port ${port}`));
// app.listen();
