import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.products.create({
        data: reqBody,
        });
        return NextResponse.json({ status: "success", data: result });
    } catch (error) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
