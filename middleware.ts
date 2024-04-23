import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
 

export default clerkMiddleware((auth, req) => {
  if (isProtectedRoute(req)) auth().protect();
});

const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)',
  '/api/webhook/clerk',
  '/api/webhook/stripe',
  '/api/uploadthing',
]);


 
export const config = {
  matcher: [
    '/((?!.*\\..*|_next).*)', // Don't run middleware on static files
    '/', // Run middleware on index page
    '/(api|trpc)(.*)'], // Run middleware on API routes
};