import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

export async function DELETE(req: Request, res: Response) {
    try {
    const prisma = new PrismaClient();
    const { searchParams } = new URL(req.url);
    const productId = searchParams.get("id");
    let result = await prisma.products.delete({
        where: { id: parseInt(productId as any) },
    });
    return NextResponse.json({ status: "success", data: result });
    } catch (error) {
    return NextResponse.json({ status: "fail", data: error });
    }
}
