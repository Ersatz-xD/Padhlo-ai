import jwt from 'jsonwebtoken';

const auth = (req, res, next) => {
  const token = req.header("Authorization")?.replace("Bearer ", "");

  if (!token) {
    return res.status(401).send({ message: "Access Denied. No token provided." });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_PRIVATE_KEY);
    req.user = decoded;  
    next();
  } catch (error) {
    console.error("Invalid token", error);
    res.status(400).send({ message: "Invalid token." });
  }
};

export default auth;
