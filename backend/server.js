require('dotenv').config();                // Load environment variables
const express = require("express");
const cors = require("cors");

const app = express();

const connectDb = require("./utils/db");   // DB connection
const router = require("./router/auth-router");
const contactRoute = require("./router/contact-router");
const adminRoute = require("./router/admin-router");
const errorMiddleware = require("./middlewares/error-middleware");

// === CORS Setup ===
const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET, PUT, POST, PATCH, HEAD, DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

// === Routes ===
app.use("/", router);
app.use("/", contactRoute);
app.use("/admin", adminRoute);

// === Error Handler ===
app.use(errorMiddleware);

// === Port Setup ===
const PORT = process.env.PORT || 5000;

// === Start Server ===
connectDb().then(() => {
  app.listen(PORT, () => {
    console.log(`✅ Server is running on port ${PORT}`);
  });
});
