/*const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const Message = require("./models/Message");
const cors = require("cors");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

// API route to get old messages
app.get("/messages", async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

// Socket.io connection
io.on("connection", (socket) => {
  console.log("New user connected");

  /*socket.on("chatMessage", async (msg) => {
    const message = new Message({ text: msg });
    await message.save();
    io.emit("chatMessage", message);
  });*/
  /*socket.on("chatMessage", async (msg) => {
  const message = new Message({ text: msg.text, username: msg.username });
  await message.save();
  io.emit("chatMessage", message);
});


  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

*/



////////////////////////////main////////////////////
/*
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const Message = require("./models/Message");
const User = require("./models/User"); // new model
const userRoutes = require("./routes/user");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, {
  cors: { origin: "*" },
});

app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/user", userRoutes); 


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* =============================
   AUTH ROUTES
============================= */

// Register
/*
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, username: user.username }, "jwtSecretKey", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

/* =============================
   CHAT ROUTES
============================= */

// Get old messages (protected)
/*
app.get("/messages", verifyToken, async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});



/* =============================
   SOCKET.IO
============================= */
/*
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    
    
    const message = new Message({ text: msg.text, username: msg.username});
    
    await message.save();
    
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

io.on("connection", (socket) => {
  socket.on("chatMessage", (msg) => {
    msg.timestamp = msg.timestamp || new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    io.emit("chatMessage", msg);
  });
});*/




/*io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    // Add timestamp
    const timestamp = new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

    // Create and save message in DB with timestamp
    const message = new Message({
      text: msg.text,
      username: msg.username,
      timestamp: timestamp
    });
    await message.save();

    // Emit saved message to all clients
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});*/
/*
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    // Add timestamp
    const timestamp = new Date().toLocaleTimeString([], { 
      hour: "2-digit", 
      minute: "2-digit" 
    });

    // Create and save message in DB with timestamp
    const message = new Message({
      text: msg.text,
      username: msg.username,
      timestamp: timestamp
    });
    await message.save();

    // Emit saved message to all clients (only once)
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});






const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/

/*
const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");

const Message = require("./models/Message");
const User = require("./models/User"); 
const userRoutes = require("./routes/user");

const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });
const uploadRoutes = require("./routes/upload");
app.use("/upload", uploadRoutes);

app.use(cors({ origin: "http://localhost:3000" }));


app.use(cors());
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/user", userRoutes); 

app.use("/uploads", express.static("uploads"));


// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* =============================
   AUTH ROUTES
============================= */

// Register
/*app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign({ id: user._id, username: user.username }, "jwtSecretKey", { expiresIn: "1h" });

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token) return res.status(403).json({ message: "No token provided" });

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

/* =============================
   FILE UPLOAD
============================= */
/*
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Upload API
app.post("/upload", verifyToken, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ fileUrl });
});

/* =============================
   CHAT ROUTES
============================= */
/*
// Get old messages (protected)
app.get("/messages", verifyToken, async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

/* =============================
   SOCKET.IO
============================= */

/*io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    const message = new Message({
      text: msg.text || null,
      username: msg.username,
      fileUrl: msg.fileUrl || null,
      timestamp: new Date()
    });

    await message.save();
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});*/
/*
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    const message = new Message({
      text: msg.text || null,   // ✅ allow null
      username: msg.username,
      fileUrl: msg.fileUrl || null,
      timestamp:
        msg.timestamp ||
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    await message.save();
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});


/* =============================
   SERVER START
============================= */
/*
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
*/


const express = require("express");
const http = require("http");
const socketIo = require("socket.io");
const mongoose = require("mongoose");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const multer = require("multer");
const path = require("path");

const Message = require("./models/Message");
const User = require("./models/User");
const userRoutes = require("./routes/user");
const uploadRoutes = require("./routes/upload");

const app = express();
const server = http.createServer(app);
/*const io = socketIo(server, { cors: { origin: "http://localhost:3000"} });*/
const io = socketIo(server, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3001"],
    methods: ["GET", "POST"],
    credentials: true
  }
});

/* =============================
   MIDDLEWARE
============================= */
/*app.use(cors({
  origin: "http://localhost:3000","http://localhost:3001,"
  credentials: true
}));*/

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:3001"],
  credentials: true
}));
app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/user", userRoutes);
app.use("/upload", uploadRoutes);

/* =============================
   MONGODB CONNECTION
============================= */
mongoose.connect("mongodb://127.0.0.1:27017/chatApp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log("MongoDB Connected"))
.catch(err => console.log(err));

/* =============================
   AUTH ROUTES
============================= */

// Register
app.post("/register", async (req, res) => {
  try {
    const { username, password } = req.body;

    const existingUser = await User.findOne({ username });
    if (existingUser) return res.status(400).json({ message: "Username already exists" });

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({ username, password: hashedPassword });
    await user.save();

    res.json({ message: "User registered successfully" });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Login
app.post("/login", async (req, res) => {
  try {
    const { username, password } = req.body;

    const user = await User.findOne({ username });
    if (!user) return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid credentials" });

    const token = jwt.sign(
      { id: user._id, username: user.username },
      "jwtSecretKey",
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: "Server error" });
  }
});

// Middleware for verifying JWT
const verifyToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) return res.status(403).json({ message: "No token provided" });

  // Handle both "Bearer <token>" and "<token>"
  const token = authHeader.startsWith("Bearer ")
    ? authHeader.split(" ")[1]
    : authHeader;

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) return res.status(401).json({ message: "Unauthorized" });
    req.user = decoded;
    next();
  });
};

/* =============================
   FILE UPLOAD
============================= */
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + path.extname(file.originalname))
});
const upload = multer({ storage });

// Upload API
app.post("/upload", verifyToken, upload.single("file"), (req, res) => {
  if (!req.file) {
    return res.status(400).json({ message: "No file uploaded" });
  }

  const fileUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;
  res.json({ fileUrl });
});

/* =============================
   CHAT ROUTES
============================= */

// Get old messages (protected)
app.get("/messages", verifyToken, async (req, res) => {
  const messages = await Message.find().sort({ createdAt: 1 });
  res.json(messages);
});

/* =============================
   SOCKET.IO
============================= */
io.on("connection", (socket) => {
  console.log("New user connected");

  socket.on("chatMessage", async (msg) => {
    const message = new Message({
      text: msg.text || null, // allow null
      username: msg.username,
      fileUrl: msg.fileUrl || null,
      timestamp:
        msg.timestamp ||
        new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
    });

    await message.save();
    io.emit("chatMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected");
  });
});

/* =============================
   SERVER START
============================= */
const PORT = 5000;
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
