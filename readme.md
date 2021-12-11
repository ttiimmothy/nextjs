# css

```css
content
height
min-height
line-height
width
min-width
font-family
font-size
font-weight
text-decoration
background-color
background-image
background-repeat
background-size
background-position
background
color
object-fit
margin
margin-top
margin-bottom
margin-left
margin-right
padding
padding-top
padding-bottom
padding-left
padding-right
list-style
border
border-radius
border-top
border-bottom
border-left
border-right
outline
box-shadow
position
top
bottom
left
right
inset
text-align
vertical-align
display
align-items
justify-content
flex
flex-wrap
flex-direction
grid-template-columns
grid-template-rows
row-gap
opacity
visibility
overflow-x
overflow-y
overflow
aspect-ratio
cursor
z-index
white-space
word-wrap
transition
transition-timing-function
transition-duration
transition-property
transform
filter
clip-path
pointer-event
resize
```

## className

- [ ] ${pageName} ${moduleName}
- [ ] app ${moduleName}_content
- [ ] page
- [ ] body
- [ ] main_content

# packages to install

```Bash
yarn add node-sass@^6.0.0 @types/node-sass
yarn add bootstrap@4
yarn add react-bootstrap@1.6.4
yarn add redux react-redux @types/react-redux
yarn add react-router-dom @types/react-router-dom
yarn add history@^4.10.1 connected-react-router@^6.8.0
yarn add redux-thunk
yarn add immer
yarn add swiper@6
yarn add @fortawesome/fontawesome-svg-core @fortawesome/free-brands-svg-icons
yarn add @fortawesome/react-fontawesome
yarn add @testing-library/jest-dom
yarn add @testing-library/react @testing-library/user-event
yarn add @types/jest
yarn add @types/react @types/react-dom
yarn add react-redux-loading-bar
yarn add redux-logger @types/redux-logger
yarn add @fortawesome/free-regular-svg-icons
yarn add @fortawesome/free-solid-svg-icons
yarn add react-onclickoutside @types/react-onclickoutside
yarn add video.js @types/video.js
yarn add videojs-ima videojs-contrib-ads
# yarn add express @types/express
# yarn add ts-node @types/ts-node
# yarn add cross-env
yarn add @videojs/http-streaming
```

# import order

```Typescript
style
package
image
next library
react library
local thunk/redux
local component (react components)
store
other local component (eg image loader)
```

## category page

```typescript
export async function getStaticPaths(){
  const categoryFetch = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/category`);
  const categories = await categoryFetch.json();
  const paths = categories.map((category:Category) => {
    return {params:{pid:[category.name_en.toLowerCase().split(" ").join("").split("/").join("")]}}; // Route is something like "this-is-my-post"
  })

  return {
    paths,
    fallback:false,
  }
}
```

## channel page

```typescript
export async function getStaticPaths(){
  const subcategoryFetch = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/subcategory`);
  const subcategories = await subcategoryFetch.json();
  const paths = subcategories.map((subcategory:SubCategory) => {
    return {params:{pid:[subcategory.name_cn.split("．").join("").split("・").join(""),subcategory.subcate_id]}}; // Route is something like "this-is-my-post"
  })

  return {
    paths,
    fallback:false,
  }
}
```

## video page

```typescript
export async function getStaticPaths(){
  const categoryFetch = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/category`);
  const category = await categoryFetch.json();
  let paths:any[] = [];
  for(let i = 0 ; i < category.length; i++){
    const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_PATH}/content/${category[i].cate_id}`);
    const result = await res.json();
    paths.push(result.map((video:VideoDetail) => {
      return {params:{pid:[video.subcate_name.split("．").join("").split("・").join(""),video.id,encodeURI(video.title)]}}; // Route is something like "this-is-my-post"
    }))
  }

  return {
    paths,
    fallback:false,
  }
}
```

## index/tags page

```typescript
export async function getStaticPaths(){
  return {
    paths:"/",
    fallback:false,
  }
}

```

# api used

getCategory:

<https://ent.i-cable.com/ci/api/category>

getContent:

<https://ent.i-cable.com/ci/api/content/{{cate_id}}>

getStream:

<https://ent.i-cable.com/ci/api/stream/{{id}}>

getSubcategory:

<https://ent.i-cable.com/ci/api/subcategory>

getProgram:

<https://ent.i-cable.com/ci/api/program>

Please try the following live channel API:

<https://ent.i-cable.com/ci/api/live/661>

<https://ent.i-cable.com/ci/api/live/662>

<https://ent.i-cable.com/ci/api/live/664>

# social media link

facebook: <https://www.facebook.com/icable.news>

instagram: <https://www.instagram.com/cabletvhk>

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3031](http://localhost:3031) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3031/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.