import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

let locales = ['tr', 'en', 'ru', 'az']
let defaultLocale = 'tr'

// Simplify locale matching for now
function getLocale(request: NextRequest) {
    const acceptLanguage = request.headers.get('accept-language')
    if (acceptLanguage) {
        // Very simple check - prefer English if explicitly requested and high priority
        if (acceptLanguage.includes('en') && !acceptLanguage.includes('tr')) {
            return 'en'
        }
    }
    return 'tr'
}

export function middleware(request: NextRequest) {
    // Check if there is any supported locale in the pathname
    const { pathname } = request.nextUrl
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )

    if (pathnameHasLocale) return

    // Redirect if there is no locale
    const locale = getLocale(request)
    request.nextUrl.pathname = `/${locale}${pathname}`
    // e.g. incoming request is /products
    // The new URL is now /en/products
    return NextResponse.redirect(request.nextUrl)
}

export const config = {
    matcher: [
        // Skip all internal paths (_next)
        '/((?!_next|favicon.ico|images|api|.*\\..*).*)',
    ],
}
