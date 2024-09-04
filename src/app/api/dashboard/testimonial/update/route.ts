import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
  try {
    const reqBody = await req.json();
    const prisma = new PrismaClient();
     const {searchParams}=new URL(req.url)
     let testimonialId = searchParams.get('id')
    let result = await prisma.testimonial.update({
      where:{id:parseInt(testimonialId as any)},
      data:reqBody
    });
    return NextResponse.json({ status: "success", data: result });
  } catch (error: any) {
    return NextResponse.json({ status: "fail", data: error });
  }
}
