import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("Contact form data:", body);
    return NextResponse.json({ success: true, message: "Mensagem recebida." }, { status: 200 });
  } catch (e) {
    return NextResponse.json({ success: false, message: "Erro no servidor." }, { status: 500 });
  }
}
