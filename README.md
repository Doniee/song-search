# React assignment

Implementation of a frontend assignment to build a site that lists songs provided by a json-server backend. The songs can be searched, filtered by level and added to or removed from favorites. The backend was given and the frontend implemented by me.

The backend is intentionally unreliable, giving errors and sometimes returning the data slowly. Some album cover images are also missing intentionally.

Built with React, Typescript and Vite.

## Running the project locally

### Backend

Navigate to the `api` folder and run

```
npm install
npm run start-api
```

View it in http://localhost:3004


### Frontend

Navigate to the `frontend` folder and run

```
npm install
npm run dev
```

View it in http://127.0.0.1:5173/

## The tech choices

### Vite

Vite has been gaining popularity as an option for setting up a React project. I had previously tried it in a small personal project and had no issues, so also used it here instead of Create React App or something similar.

### Tailwind CSS

Tailwind is used for styles. I've used it in previous projects and like it a lot. It removes a lot pains of CSS, like naming classes and most specificity issues. It comes with normalization, autoprefixing and a bunch of helpful utilities, keeps the production CSS really small and is fast and simple to use.

### SWR

Used for loading and updating the data. I hadn't used this particular library before, just something similar, but decided to try it since it's from Vercel like Vite and I had heard good things about it. It had a lot of helpful and useful features, like caching, loading and error states, pagination for implementing the infinite scroll, mutation and revalidation for updating the favorites and error retry, which automatically retries fetching when the backend fails.

### Tests

Tests are done with Vitest and React testing library. I've used Jest before, but seemed like Vitest could work well with Vite.

### Other libraries

- ESlint and Prettier are used for linting and formatting. They are quite standard nowadays, I wouldn't do any projects without them.

- `classnames` for joining classnames and applying classes conditionally.

- `vite-plugin-svgr` for importing SVG files as React components.

- `react-infinite-scroll-component` for loading more songs when scrolling down.

- `use-debounce` from lodash for updating the search query.


## What could be improved or done differently on a real site

- The search and filter queries could come as query parameters from the url.
- If the UI strings wouldn't come from a content management system on a real site, a library like `react-i18next` could be useful. For this task the UI strings are just stored in an object.
- There could be more animations, for example when toggling the filters and hiding alerts. The animation for adding/deleting a favorite could also be smoother.
- There could always be more tests. Some interactivity could be tested with the current setup and even further with end to end tests.
- Some data could maybe be handled with `useContext` (or some state management library), now there's quite many props being passed around.
- If this was a real project with a design system, the style setup would be configured more, for example to have helper classes for different text styles. Now they are individually composed from Tailwind utility classes in each place.
- The UI could have a button for clearing the search and the same for selected filters.
