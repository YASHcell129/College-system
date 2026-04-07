require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path"); 

const authRoutes = require("./routes/auth");
const attendanceRoutes = require("./routes/attendance");
const requestRoutes = require("./routes/requests");
const dashboardRoutes = require("./routes/dashboard");
const notificationRoutes = require("./routes/notifications");

const app = express();

app.use(cors());
app.use(express.json());

// ✅ API routes
app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/requests", requestRoutes);
app.use("/api/dashboard", dashboardRoutes);
app.use("/api/notifications", notificationRoutes);


// ✅ ADD THIS PART HERE (VERY IMPORTANT)
app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


// ✅ KEEP THIS LAST
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});