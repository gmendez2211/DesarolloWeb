import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const POST = async (request: NextRequest) => {
  //const { method, body } = request;

  //const { name, email } = request.body;

  try {
    const JsonBody = await request.json();

    const query =
      "INSERT INTO tbl_usuarios (id, primernombre, segundonombre, primerapellido, segundoapellido) VALUES ($1, $2, $3, $4, $5) RETURNING *";
    const values = [
      JsonBody.id,
      JsonBody.primernombre,
      JsonBody.segundonombre,
      JsonBody.primerapellido,
      JsonBody.segundoapellido,
    ];
    //console.log("Valores: ", values, " Metodo: ", method);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await conn.query(query, values);

    return new NextResponse(JSON.stringify("Usuario: " + result.rows[0]), {
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
