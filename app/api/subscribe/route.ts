import { NextResponse } from "next/server";
import { appendLeadRow } from "@/lib/sheets";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "Valid email is required" },
        { status: 400 }
      );
    }

    const today = new Date().toISOString().split("T")[0];

    // Columns: A=Name, B=Email, C=Phone, D=Date Entered, E=Source, F=Lead Score
    await appendLeadRow(["", email, "", today, "landing page", "2"]);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Subscribe error:", error);
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  }
}
