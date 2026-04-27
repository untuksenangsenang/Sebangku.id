import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, instansi, email, phone, topic, message } = body;

    // Validasi sederhana
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Data tidak lengkap" },
        { status: 400 }
      );
    }

    const { error } = await supabase.from("contacts").insert([
      {
        name,
        instansi,
        email,
        phone,
        topic,
        message,
      },
    ]);

    if (error) {
      console.error(error);
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true });

  } catch (err) {
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}