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

**Note:** This requires the app already running at http://localhost:3000.

By default, these will run headless. To update this, please update the `playwright.config.ts` with `headless: false`.

## Linting

To lint the project using ESLint run:

```
pnpm run lint
```
