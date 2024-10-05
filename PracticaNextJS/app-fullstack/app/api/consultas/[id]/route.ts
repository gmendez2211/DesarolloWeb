import { NextRequest, NextResponse } from "next/server";
import { conn } from "@/app/utils/database";

export const GET = async (
  request: NextRequest,
  { params }: { params: { id: number } }
) => {
  const _Id = params.id;
  console.log("Id ", _Id);
  try {
    const query =
      "SELECT primernombre, segundonombre, primerapellido, segundoapellido FROM tbl_usuarios WHERE id = $1";

    //console.log("Valores: ", values, " Metodo: ", method);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const result = await conn.query(query, [_Id]);
    /*
    return new NextResponse(
      JSON.stringify("Usuario:" + result.rows.toString()),
      {
        status: 200,
        headers: { "content-type": "application/json" },
      }
    );
    */
    return Response.json(result.rows[0]);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("Error consultando usuario:", error);
    return new NextResponse("Error interno del servidor " + error.message, {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
};
