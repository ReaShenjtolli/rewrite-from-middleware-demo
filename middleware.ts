import { NextRequest, NextResponse } from "next/server";

export function middleware (req: NextRequest) {

    const {pathname } = req.nextUrl

    if (pathname.startsWith("/test")) {
        const url = req.nextUrl.clone();
        url.pathname = '/'

        return NextResponse.rewrite(url)
    }
}
