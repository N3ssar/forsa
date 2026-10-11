import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const host = (request.headers.get("host") ?? "").toLowerCase();
  const pathname = request.nextUrl.pathname;

  console.log("🔍 Host:", host, "| Pathname:", pathname);

  const isAdminHost =
    host.includes("admin.localhost") || host.startsWith("admin.forsa");

  if (isAdminHost) {
    if (pathname !== "/dashboard") {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
    return NextResponse.next();
  }

  const isUserHost = host.includes("localhost") || host.startsWith("forsa");

  if (isUserHost && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
