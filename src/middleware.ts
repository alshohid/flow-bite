import { NextRequest, NextResponse } from "next/server";
import { VerifyToken} from "./utill/jwtTokenhelper"; // Import the payload type

export async function middleware(req: NextRequest) {
 
if(req.nextUrl.pathname.startsWith('/dashboard')){
try {
    let token = req.cookies.get("token");
    if (!token) {
      throw new Error("No token found");
    }
    let payload = await VerifyToken(token.value);
    const requestedHeaders = new Headers(req.headers);
    requestedHeaders.set("email", payload.email);
    requestedHeaders.set("id", payload.id);
    return NextResponse.next({ request: { headers: requestedHeaders } });
} catch (error) {
  return NextResponse.redirect(new URL('/login',req.url))
}
}
}


//  if (req.nextUrl.pathname.startsWith("/dashBoard")) {
//    try {
//      const token = req.cookies.get("token");

//      if (!token) {
//        throw new Error("No token found");
//      }
//      const payload = await VerifyToken(token.value);
//      const requestedHeaders = new Headers(req.headers);
//      requestedHeaders.set("email", payload.email);
//      requestedHeaders.set("id", payload.id);

//      return NextResponse.next({
//        request: { headers: requestedHeaders },
//      });
//    } catch (error) {
//      const requestedHeaders = new Headers(req.headers);
//      requestedHeaders.set("email", "0");
//      requestedHeaders.set("id", "0");

//      return NextResponse.next({
//        request: { headers: requestedHeaders },
//      });
//    }
//  }