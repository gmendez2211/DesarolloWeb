import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const POST = async (request: NextRequest) => {
  //const { method, body } = request;

  //const { name, email } = request.body;

  try {
    const JsonBody = await request.json();

    const query =
      "INSERT INTO tbl_usuarios (name, email) VALUES ($1, $2) RETURNING *";
    const values = [JsonBody.name, JsonBody.email];
    //console.log("Valores: ", values, " Metodo: ", method);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await conn.query(query, values);

    return new NextResponse(JSON.stringify("User: " + result.rows[0]), {
      status: 200,
    });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error inserting user:", error);
    return new NextResponse("Error interno del servidor " + error.message, {
      status: 500,
    });
  }
};
