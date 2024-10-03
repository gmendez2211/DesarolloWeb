import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const _Id = params.id;

  try {
    const query =
      "SELECT primernombre, segundonombre, primerapellido, segundoapellido FROM tbl_usuarios WHERE id = $1 RETURNING *";

    //console.log("Valores: ", values, " Metodo: ", method);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await conn.query(query, [_Id]);

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
