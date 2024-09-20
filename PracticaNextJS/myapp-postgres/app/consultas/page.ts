import { NextApiRequest, NextApiResponse } from "next";

import { conn } from "@/app/utils/database";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const response = await conn.query("select * from tbl_usuarios");
  console.log(response);
};
