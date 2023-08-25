import { auth } from "@clerk/nextjs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { userId } = auth();
    const body = await req.json();
    const { messages } = body;

    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    if (!messages) {
      return new NextResponse("Messages are required", { status: 400 });
    }

    // TODO: actual api call for openai
    const response = {
        messages: "To be done"
    }

    return NextResponse.json(response)

  } catch (error) {
    console.log("[CONVERSATION_ERROR]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
