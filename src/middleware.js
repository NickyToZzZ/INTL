import createMiddleware from 'next-intl/middleware';
 
export default createMiddleware({
  locales: ['ru', 'en'],
  localeDetection: true
});
 
export const config = {
  matcher: ['/', '/(ru|en)/:path*']
};