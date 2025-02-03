All are build process for nextjs application.

CSR - Client side rendering
SSR - Server side rendering
SSG - Static site generation
ISR - Incremental Static Regeneration


Build Process => 
    Source code => Build => Server => Client(web browser)


<!-- CSR -  -->
- Build => Server => Client(web browser)
- Here, everything renders on client side or browser.

<!-- SSR -  --> - generate on each request
- rendering happend on server side whenever client requests.
- every time clinet make a request that page render on server and then that web page will thrown to the client. 


<!-- SSG --> generate on build time
- it makes more faster process then above
- on build time itself we are generating each page and store in server.

<!-- ISR -->
ISr enables you to use static generation on per page basis, without needing to  rebuild the entire site.
- every specific time build phase happend , u can control by hours or minutes based on neeed.


<!-- things to decide which one to pick -   -->

1. build time
2. dynamic content
3. SEO
4. Render time
5. content updation