
const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandlerMiddleware");
const { connectDB, sequelize } = require("./config/db");
const storeRoutes = require("./routes/storeRoutes");
const driverRoutes = require("./routes/driverRoutes");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/uploads", express.static("uploads"));
app.use("/", storeRoutes);
app.use("/", driverRoutes);
app.use(errorHandler);


connectDB();

sequelize.sync({ alter: true });

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log("App running on PORT", PORT)
})