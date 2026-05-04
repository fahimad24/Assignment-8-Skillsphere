import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers,
    });


    const { pathname } = request.nextUrl;
    console.log('pathname', pathname)
    console.log('Session in proxy:', session);

    if (pathname.startsWith('/profile') || pathname.startsWith('/courses/')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url));
        } else {
            return NextResponse.next();
        }
    }


    if (pathname === '/login' || pathname === '/sign-up') {
        if (session) {
            return NextResponse.redirect(new URL('/', request.url));
        } else {
            return NextResponse.next();
        }
    }

    return NextResponse.next();


}

export const config = {
    matcher: ['/courses/:path+', '/profile', '/profile/update', '/login', '/sign-up'],
}