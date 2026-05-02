import { NextResponse } from 'next/server'
import { auth } from './lib/auth';
import { headers } from 'next/headers';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: await headers(),
    });


    const { pathname } = request.nextUrl;
    console.log('Session in proxy:', session);

    if (pathname.startsWith('/profile') || pathname.startsWith('/courses/')) {
        if (!session) {
            return NextResponse.redirect(new URL('/login', request.url));
        }
    }


    if (pathname === '/login' || pathname === '/sign-up') {
        if (session) {
            return NextResponse.redirect(new URL('/', request.url));
        }
    }


}

export const config = {
    matcher: ['/courses/:path*', '/profile', '/login', '/sign-up', '/profile/update'],
}