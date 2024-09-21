import { NextApiRequest, NextApiResponse } from "next";

import { conn } from "@/app/utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { name, email } = req.body;

  try {
    const query =
      "INSERT INTO tbl_usuarios (name, email) VALUES ('emendez', 'emendez@micorreo.com') RETURNING *";
    const values = [name, email];
    const result = await conn.query(query, values);

    res.status(200).json(result.rows[0]);
  } catch (error) {
    console.error("Error inserting user:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
