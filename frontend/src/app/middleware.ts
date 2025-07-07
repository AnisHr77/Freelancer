import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
    const token = request.cookies.get("token")?.value;  
    const url = request.nextUrl.clone();

    if (token && url.pathname === '/') {
        url.pathname = '/dashboard';
        return NextResponse.redirect(url);
    }

    if (!token && url.pathname.startsWith('/dashboard')) {
        url.pathname = '/guest';
        return NextResponse.redirect(url);
    }

    return NextResponse.next(); // allow other routes as normal
}
