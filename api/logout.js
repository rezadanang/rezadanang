import { logout } from "../src/auth.js";

export default async function handler(req, res) {
  if (req.method === "POST") {
    return logout(req, res);
  }
  res.status(405).json({ error: "Method not allowed" });
}
