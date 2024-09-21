import { NextApiRequest, NextApiResponse } from "next";

import { conn } from "@/app/utils/database";

// eslint-disable-next-line import/no-anonymous-default-export
export default async (req: NextApiRequest, res: NextApiResponse) => {
  const { method, body } = req;
  switch (method) {
    case "POST":
      try {
        const { name, email } = body;
        const query =
          "INSERT INTO tbl_usuarios (name, email) VALUES ($1, $2) RETURNING *";
        const values = [name, email];
        const result = await conn.query(query, values);

        return res.status(200).json(result.rows[0]);
      } catch (error) {
        console.error("Error inserting user:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
  }
};
