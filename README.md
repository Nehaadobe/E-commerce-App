# E-Commerce Women's Product Page

The objective of this application is to develop an e-commerce product page where products can be filter based on user selection from sizes dropdown.

## Getting Started

**Prerequisites**
```
- Node Js   
- NPM  
- git  
- yarn 
```

**Installing**
```
- git clone https://github.com/Nehaadobe/E-commerce-App/tree/master
- cd E-commerce-App
- yarn install or npm install
- yarn start or npm start
- open url http://localhost:8080
```

**Application Stack**
```
React (https://reactjs.org/)
Redux (https://redux.js.org/basics/usage-with-react)
Redux Thunk (https://codeburst.io/understanding-redux-thunk-6dbae0241817)
Styled Component (https://www.styled-components.com/)
ES6 (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Language_Resources)
Axios (https://github.com/axios/axios)
```

## Architecture

```

├── App
│   ├── assets
│   │   ├── product-1.jpg
│   │   ├── product-2.jpg
│   │   ├── product-3.jpg
│   │   ├── product-4.jpg
│   │   ├── product-5.jpg
│   │   ├── product-6.jpg
│   │   ├── product-7.jpg
│   │   ├── product-8.jpg
│   ├── components
│   │   ├── atoms
│   │   │   ├── Dropdown
│   │   │   │   └── Dropdown.js
│   │   │   ├── Image
│   │   │   │   └── Image.js
│   │   │   └── Label
│   │   │       └── Label.js
│   │   ├── molecules
│   │   │   ├── Filter
│   │   │   │   ├── Filter.js
│   │   │   │   └── Filter.style.js
│   │   │   ├── Productgrid
│   │   │   │   ├── Productgrid.js
│   │   │   │   └── Productgrid.style.js
│   │   │   └── Spinner
│   │   │       ├── Spinner.js
│   │   │       └── Spinner.style.js
│   │   ├── organisms
│   │   │   └── ProductList
│   │   │       ├── ProductList.style.js
│   │   │       └── Productlist.js
│   │   └── templates
│   │       └── Productpage
│   │           ├── Productpage.js
│   │           ├── productActions.js
│   │           ├── productContants.js
│   │           └── productReducer.js
│   ├── global
│   │   ├── ErrorBoundary.js
│   │   ├── globalStyle.js
│   │   ├── localVariables.js
│   │   ├── services.js
│   │   └── sizeCategories.js
│   ├── images
│   │   ├── index.js
│   ├── reducer
│   │   └── rootReducer.js
│   ├── static
│   │   ├── DefaultStyle.js
│   │   └── product.json
│   ├── store
│   │   └── store.js
│   ├── style
│   │    ├── theme
│   │    │   └── colors.js
│   │    └── typography.js
│   ├── index.html
│   ├── index.js
├── README.md
├── node_modules
├── package-lock.json
├── package.json
├── buils
│   ├── images
│   │   ├── product-1.jpg
│   │   ├── product-2.jpg
│   │   ├── product-3.jpg
│   │   ├── product-4.jpg
│   │   ├── product-5.jpg
│   │   ├── product-6.jpg
│   │   ├── product-7.jpg
│   │   └── product-8.jpg
│   ├── bundle.js
│   ├── index.html|
├── webpack.config.js
└── yarn.lock
```



### React JS

A JavaScript library for building user interfaces. There are several benefits of using React JS:
```
1. It facilitates the overall process of writing components.

2. It boosts productivity and facilitates further maintenance.

3. It ensures faster rendering.

4. It guarantees stable code.

5. It is SEO friendly.

6. It comes with a helpful developer toolset.

7. There is React Native for mobile app development.

8. It is focused and easy-to-learn.

9. It is backed by a strong community called Facebook.
```

### Redux & Redux Thunk

Redux is a predictable state container for JavaScript apps. Following are the features of Redux:

```
-- Predictable
-- Centralized
-- Debuggable
-- Flexible
```

With a plain basic Redux store, you can only do simple synchronous updates by dispatching an action. Middleware extend the store's abilities, and let you write async logic that interacts with the store.

Thunks are the recommended middleware for basic Redux side effects logic, including complex synchronous logic that needs access to the store, and simple async logic like AJAX requests.

For more details on why thunks are useful, see:

```
Stack Overflow: Dispatching Redux Actions with a Timeout
http://stackoverflow.com/questions/35411423/how-to-dispatch-a-redux-action-with-a-timeout/35415559#35415559
Dan Abramov explains the basics of managing async behavior in Redux, walking through a progressive series of approaches (inline async calls, async action creators, thunk middleware).

What the heck is a "thunk"?
https://daveceddia.com/what-is-a-thunk/
A quick explanation for what the word "thunk" means in general, and for Redux specifically.

```

### Axios JS

Promise based HTTP client for the browser and node.js. Following are the features of Axios JS:

```

-- Make XMLHttpRequests from the browser
-- Make http requests from node.js
-- Supports the Promise API
-- Intercept request and response
-- Transform request and response data
-- Cancel requests
-- Automatic transforms for JSON data
-- Client side support for protecting against XSRF

```


### Styled-Components

Styled components is a CSS-in-JS styling framework that uses tagged template literals in JavaScript and the awesome power of CSS to provide a platform that allows you to write actual CSS to style react components. In essence, styled components are easy-to-make react components you write with the styled-components library where you can style your components with plain CSS inside your javascript code. There are following reasone why we should use styled-components:

**1. Freedom to build custom components with CSS**

With styled-components, the user interface design focus shifts from just merely styling HTML elements or React components through className to defining styled components that contain their own styles and are so easily reusable across the entire project. So initially a sub-heading declaration which looked like this:

```
<h2 className="subTitle">Gucci Snakes </h2>
```
**with the styles defined like this:**
```
h2.subTitle{
  font-size: 2em;
  color: blue;
}
```
**would become something like this:**
```
import styled from 'styled-components';
const Subtitle = styled.h2`
  font-size: 2em;
  color: blue;
`;
<Subtitle>Gucci Snakes</Subtitle>
```
