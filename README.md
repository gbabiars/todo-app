This is a basic Todo App with using a mock API.

The app is built using the following technologies:

- [Next.js](https://nextjs.org/) as the React application framework
- [TypeScript](https://www.typescriptlang.org/)
- [TailwindCSS](https://tailwindcss.com/) for styling
- [Radix UI](https://www.radix-ui.com/) for accessibility
- [React Intl](https://formatjs.github.io/docs/getting-started/installation/) for internationalization
- [Vitest](https://vitest.dev/) for unit and component testing
- [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for accessible component testing
- [Playwright](https://playwright.dev/) for end to end testing in the browser
- [ESLint](https://eslint.org/) for linting
- [Storybook](https://storybook.js.org/) for component development and documentation
- [pnpm](https://pnpm.io/installation) as package manager

## Getting Started

In order to properly set up your local environment, you will need to add a file `env.local` to the root with the following (using your API key):

```
NEXT_PUBLIC_API_KEY=YOUR_API_KEY
```

This file is ignored by `git` and is required to properly authenticate!

If you do not already have `pnpm` installed, please do so using their [install guide](https://pnpm.io/installation).

Next, install the dependencies for the project:

```bash
pnpm install
```

If you are going to run E2E tests, you will need to install Playwright:

```bash
pnpm exec playwright install
```

## Development

### Next.js

To start the Next.js app run:

```
pnpm run dev
```

This will open the app at http://localhost:3000.

### Storybook

To start the Storybook instance run:

```
pnpm run storybook
```

This will open the Storybook instance at http://localhost:6006.

## Testing

### Component/Unit Tests

Component and unit tests using Vitest can be run using:

```
pnpm run test
```

### E2E Tests

End to end testing tests using Playwright can be run using:

```
pnpm run e2e
```

By default, these will run headless. To update this, please update the `playwright.config.ts` with `headless: false`.

## Linting

To lint the project using ESLint run:

```
pnpm run lint
```

## Architecture

This application use Next.js and React to create a component driven architecture. This starts with the single `app/page.tsx` which is responsible for the for the fetching of data and state management. The descendent components are largely presentational and do not maintain their own state. The tasks flow down as props and the onComplete callback propagates up.

For styling, this uses TailwindCSS as the base. Custom variables have been added for the todo colors neutral, danger and success. The fonts are using Roboto to align with design specifications.

Radix UI primitives are being used to ensure accesible components. This supports keyboard accessibility and ARIA attributes but are styled to match the app needs.

For testing, this application uses a combination of unit tests with Vitest and React Testing Library, and end to end tests with Playwright.

Storybook is being used to develop and document the components. This can be run locally to view and interact with the components and their variations. This component driven development approach allows for the components to be tested in isolation and ensures that they are working as expected without having to run the app.

## Additional Considerations

### Error Handling

The application has a basic error handling mechanism. When a request fails, the error is logged to the console and the user is presented with a generic error message. This includes errors for both initial loading and when updating a todo item.

### Loading State

The application has a basic loading state. When the data is being fetched, the user is presented with a skeleton loader.

### Empty State

When there are no todo items, the user is presented with a message to the effect.
