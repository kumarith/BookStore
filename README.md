# Impact Coding Assessment - Bookstore app
### User story - Book browsing & Book Search
-   Main Next.js page is /pages/index.tsx
-   Main page loads a 'Search' component ( components/Searchbar) in MUI AppBar that manages the seach Query (google API is alerady case-insensitive) and passes user entered search query back to parent component. Triggers onChange as well as on search button click.
-   API Key for Google Libray search managed in env.
-   Main page also laods BookRecord component in map for each Google API result.
-   Uses the interface of Google Book API from (types/Book.ts)

### User story - Book Details
-   Main page also loads BookDetailsComponents by passing the selectedBookID state ( selectedBookID is updated by value from a call back function from BookRecord component)
-   User can go back to results - basically same page but hides and displays results block or details componetn based on flag that gets changes whenever user clicks "back to list"
-   Also added "More info" that passes selected book id to another next.js (pages/bookDetails.tsx)page that makes google API call with ID. 

### User story - Engaging UI
- Care has been taken to load a MUI loader gif while Book Details API is laoding.

### User story - Shopping Cart
- Cart is another component that gets updated when user adds to cart from details component.
- Cart shows price as well.
- "Remove item" function is not implemented.


### User story - Discounted Books 
-   Random price and discount has been set while rendering the result , by passsing random values (between 1-100) to Search resuts component (BookRecord)
- Same price will be passed to cart.

### User story - Add to Basket 
-  Assumed Basket and Cart are similar, in given time couldn't implement.

#### 
## Design choices that were not implemented. 
-   Initally intended to do in multiple pages for all components, when users navigates between components the idea was to use Redux to reatain complex states ( of cart, current search results etc). However ran into challenges using Redux with Next.Js. Resorted to standard state hooks approach for this assignment.
- Ideally shoud have used Next.js api's to proxy google api so that API Key could've been compleatly managed at server side.

###

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
