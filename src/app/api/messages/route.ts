// app/api/messages/route.ts
import { supabase } from "@/lib/db";
import { NextResponse } from "next/server";

// app/api/messages/route.ts
export async function GET() {
  const { data, error } = await supabase.from("contact_messages").select("*");

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ contact_messages: data });
}
