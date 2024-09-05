import { PrismaClient } from "@prisma/client";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  try {
    const headerList = headers();
    const idHeader = headerList.get("id");
    const id = idHeader ? parseInt(idHeader) : null;
    const prisma = new PrismaClient();
    let result = await prisma.users.findUnique({
      where: { id: id as any },
      select: {
        id: true,
        firstName: true,
        lastName: true,
        email: true,
        mobile: true,
        company: true,
        createdAt: true,
        updatedAt: true,
      },
    });
    return NextResponse.json({ status: "success", data: result });
  } 
  catch (error) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
