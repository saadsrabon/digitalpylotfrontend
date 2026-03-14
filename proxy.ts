import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function proxy(request: NextRequest) {

  const token = request.cookies.get("accessToken");

  const path = request.nextUrl.pathname;

  if (!token && path !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (token && path === "/login") {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|api|favicon.ico).*)"],
};
