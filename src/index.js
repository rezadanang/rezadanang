import express from "express";
import dotenv from "dotenv";
import { register, login, logout, me } from "./auth.js";

dotenv.config();

const app = express();
app.use(express.json());

app.post("/api/register", register);
app.post("/api/login", login);
app.post("/api/logout", logout);
app.get("/api/me", me);

app.get("/", (req, res) => res.send("Server running"));

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Server running at http://localhost:${port}`));
