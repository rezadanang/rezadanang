import { me } from "../src/auth.js";

export default async function handler(req, res) {
  if (req.method === "GET") {
    return me(req, res);
  }
  res.status(405).json({ error: "Method not allowed" });
}
