import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  const userRole = request.cookies.get("role")?.value;

  const isAdmin = userRole === "admin";

  const isAdminRoute =
    pathname.startsWith("/admin") || pathname.startsWith("/dashboard");

  if (isAdminRoute) {
    if (!isAdmin) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico|api).*)"],
};
