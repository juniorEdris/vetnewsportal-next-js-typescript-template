import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// The country to block from accessing the secret page
const BLOCKED_COUNTRY = "SE";

// Trigger this middleware to run on the `/secret-page` route
export const config = {
  matcher: "/",
};

export function middleware(req: NextRequest) {
  // Extract country. Default to US if not found.
  const country = (req.geo && req.geo.country) || "US";
  //   const acc = localStorage.getItem("acc");

  console.log(`Visitor from ${country}`);

  // Specify the correct route based on the requests location
  if (country === BLOCKED_COUNTRY) {
    req.nextUrl.pathname = "/signin";
  } else {
    req.nextUrl.pathname = `/`;
  }

  // Rewrite to URL
  return NextResponse.rewrite(req.nextUrl);
}
