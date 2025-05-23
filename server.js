const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");

const app = express();
//Connecting database
connectDB();

//Init Middleware
app.use(express.json({ extended: false }));

app.use(
  cors({
    origin: ["https://bytesphere-3n3r.onrender.com", "http://localhost:3000"],
    credentials: true,
  })
);
app.get("/", (req, res) => res.send("API Running"));

//Define routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/posts", require("./routes/api/posts"));

const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
