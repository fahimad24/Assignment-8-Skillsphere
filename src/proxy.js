import { NextResponse } from 'next/server'

// This function can be marked `async` if using `await` inside
export function proxy(request) {
    const token = request.cookies.get('better-auth.session_token')?.value;
    const { pathname } = request.nextUrl;
    console.log('Token in proxy:', token);

    if (pathname.startsWith('/profile') || pathname.startsWith('/courses/')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }


    if (pathname === '/login' || pathname === '/sign-up') {
        if (token) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


}

export const config = {
    matcher: ['/courses/:path*', '/profile', '/login', '/sign-up'],
}