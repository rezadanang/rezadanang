import { login } from "../src/auth.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return login(req, res);
  }
  res.status(405).json({ error: "Method not allowed" });
}
