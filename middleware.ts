import { NextResponse, type NextRequest } from "next/server";

const FRAME_ANCESTORS_HEADER = "frame-ancestors 'self';";

export function middleware(_req: NextRequest) {
  const res = NextResponse.next();
  res.headers.set("Content-Security-Policy", FRAME_ANCESTORS_HEADER);
  return res;
}

export const config = { matcher: "/:path*" };
