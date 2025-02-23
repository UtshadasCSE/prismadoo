import { log } from "console";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get Users from DB
export async function GET() {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    log(error);
    return NextResponse.json(
      { error: "Faild to fetch users" },
      { status: 500 }
    );
  }
}

// Save users data on the DB

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { fullname, email, gender, category, imageURL } = body;
    if (!fullname || !email || !gender || !category || !imageURL) {
      return NextResponse.json(
        { erro: "All fields is required!" },
        { status: 400 }
      );
    }
    const newUser = await prisma.user.create({
      data: { fullname, email, gender, category, imageURL },
    });
    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    log(error);
    return NextResponse.json(
      { error: "User not created successfully!" },
      { status: 500 }
    );
  }
}
