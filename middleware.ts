// export { default } from 'next-auth/middleware'

// export const config = {
// 	matcher: ['/users/:path*'],
// }

import type { NextRequest } from 'next/server'
// middleware.ts
import { NextResponse } from 'next/server'

export function middleware(request: NextRequest) {
	const host = request.headers.get('host')
	const url = request.nextUrl.clone()

	// Redirect non-www to www (and ensure https)
	if (host === 'villadalat.org') {
		url.host = 'www.villadalat.org'
		url.protocol = 'https:'
		return NextResponse.redirect(url, 301) // 301 is a permanent redirect
	}

	return NextResponse.next()
}

export const config = {
	matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
