import { supabase } from "@/lib/db";
import { NextResponse } from "next/server";
import z from "zod";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters long"),
  email: z.string().email("Invalid email address"),
  message: z.string().min(10),
  sent_from: z.string().optional(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.format() },
        { status: 400 }
      );
    }

    const { name, email, message, sent_from } = parsed.data;

    const { error } = await supabase.from("contact_messages").insert({
      name,
      email,
      message,
      sent_from: sent_from || "unknown",
    });

    if (error) {
      console.error("Error inserting contact message:", error);
      return NextResponse.json(
        { error: "Failed to send message" },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: "Message sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("UNEXPECTED ERROR: Error processing contact form-", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
