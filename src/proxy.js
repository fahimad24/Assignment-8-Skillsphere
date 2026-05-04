import { NextResponse } from 'next/server'
import { auth } from './lib/auth';

// This function can be marked `async` if using `await` inside
export async function proxy(request) {

    const session = await auth.api.getSession({
        headers: request.headers,
    });

    const { pathname } = request.nextUrl;

    if (pathname.startsWith('/login') || pathname.startsWith('/sign-up')) {
        if (!session) {
            return NextResponse.next();
        }

        return NextResponse.redirect(new URL('/', request.url));
    }

    if (session) {
        return NextResponse.next();
    }

    return NextResponse.redirect(new URL('/login', request.url));


}

export const config = {
    matcher: ['/courses/:path+', '/profile', '/profile/update', '/login', '/sign-up'],
}