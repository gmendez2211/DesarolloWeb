// pages/api/submit.js
import nc from "next-connect";
import pool from "../../lib/db";

const handler = nc().post(async (req, res) => {
  const { name, email } = req.body;
  const query = "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *";
  const values = [name, email];
  const { rows } = await pool.query(query, values);
  res.json(rows[0]);
});

export default handler;
