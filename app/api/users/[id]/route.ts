import { log } from "console";
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// update user
export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const body = await req.json();
    const { fullname, email, gender, category, imageURL } = body;
    const updateUser = await prisma.user.update({
      where: { id },
      data: { fullname, email, gender, category, imageURL },
    });
    return NextResponse.json(updateUser, { status: 200 });
  } catch (error) {
    log(error);
    return NextResponse.json(
      { error: "Failed to user updated!" },
      { status: 500 }
    );
  }
}

// Delete user
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    await prisma.user.delete({ where: { id } });
    return NextResponse.json(
      { message: "User successfully deleted" },
      { status: 204 }
    );
  } catch (error) {
    log(error);
    return NextResponse.json({ error: "User delete failed!" }, { status: 500 });
  }
}
