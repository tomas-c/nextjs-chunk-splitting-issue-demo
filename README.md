# Next.js + TypeScript + Material-UI + Faker

The code here is to show how Next.js does not share dependencies between different pages in development mode. 

To run do the following:
```bash
git clone https://github.com/tomas-c/nextjs-chunk-splitting-issue-demo.git
cd nextjs-chunk-splitting-issue-demo
npm install
npm run dev
```

Then:
1. Go to http://localhost:3000
2. Open the Network panel in Chrome DevTools and enable Preserve Logs
3. Click on "First" link in the page. Notice the size of first.js file that is loaded. Should be around 3.8MB compressed and 18.1MB uncompressed.
4. Click on "Second" link in the page. Notice the size of second.js file that is loaded. Should be around 3.8MB compressed and 18.1MB uncompressed. It's almost identical to first.js file.
5. Refresh and notice that the newly loaded second.js is identical to the previous one but was not fetched from a cache.

Based on:
* https://github.com/vercel/next.js/tree/canary/examples/with-typescript
* https://github.com/mui-org/material-ui/tree/next/examples/nextjs