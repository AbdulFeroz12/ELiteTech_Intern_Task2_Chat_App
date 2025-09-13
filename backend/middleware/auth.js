const jwt = require("jsonwebtoken");

function authMiddleware(req, res, next) {
  const authHeader = req.headers["authorization"];

  if (!authHeader) {
    return res.status(403).json({ message: "No token provided" });
  }

  const token = authHeader.split(" ")[1]; // Expect: "Bearer <token>"
  if (!token) {
    return res.status(403).json({ message: "Invalid token format" });
  }

  jwt.verify(token, "jwtSecretKey", (err, decoded) => {
    if (err) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    req.user = decoded; // user info from token
    next();
  });
}

module.exports = { authMiddleware };
