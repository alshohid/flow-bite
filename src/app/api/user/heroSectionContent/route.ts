import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

export interface heroContent {
  id:string;
  title:string;
  description:string;
}

export async function GET(req:Request,res:Response) {
  try {
    const prisma = new PrismaClient();
    const heroSectionContent = await prisma.HeroSectionContent.findMany();
    console.log('hero ',heroSectionContent)
    return NextResponse.json({ status: "success", data: heroSectionContent });
  } catch (error) {
    return NextResponse.json({ status: "fail", error: error });
  }
}
