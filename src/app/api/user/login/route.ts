import { CreateToken } from "@/utill/jwtTokenhelper";
import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
 export interface resultProps{

 }
export async function POST(req: Request, res: Response) {
    try {
        const reqBody = await req.json();
        const prisma = new PrismaClient();
        let result = await prisma.users.findMany({
        where: reqBody,
        });
        if (result?.length === 0) {
        return NextResponse.json({ status: "success", data: result });
        } else {
            const token = await CreateToken(result.email,result.id )
            const expirationDate =  new Date(Date.now() + 24*60*60*1000)
            const cookieString = `token=${token}; expires=${expirationDate.toUTCString()}; Path=/`;
            return NextResponse.json({status:"success", data:token},{status:200,headers:{'set-cookie':cookieString}})
        }
    } catch (error: any) {
        return NextResponse.json({ status: "fail", data: error });
    }
    }
