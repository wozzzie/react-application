Plant Store
============

This is a React application for a Plant store that allows users to browse different types of plants, discover detailed information about different plants. The application uses Redux Toolkit for state management, React Router DOM for navigation, and React Hook Form for form handling.

Installation
------------

To get started, you can clone the repository and install the dependencies:

`git clone https://github.com/wozzzie/react-application.git`

`npm install`

Usage
-----

To start the development server, run:

`npm run dev:ssr`

This will start a development server at `http://localhost:5173/`.

Testing
-------

To run unit tests using Vitest:

`npm run test:unit`

To generate code coverage report for unit tests using Vitest:

`npm run coverage:unit`

To start the Node.js server, run Cypress end-to-end tests and generate code coverage report:

`npm run test:e2e`

Linting
-------

To lint the project, run:

`npm run lint`

This will run ESLint with the `eslint-config-prettier` plugin, which disables rules that conflict with Prettier formatting.

Dependencies
------------

-   `@reduxjs/toolkit`: A package that simplifies Redux configuration and provides utilities for common Redux use cases.
-   `express`: A fast and minimalistic web framework for Node.js.
-   `react`: A library for building user interfaces using a component-based architecture.
-   `react-dom`: A package that provides the DOM-specific methods for React.
-   `react-hook-form`: A package for building forms in React with validation and error handling.
-   `react-redux`: A package that provides bindings between React components and Redux.
-   `react-router-dom`: A package for declaratively routing in React applications.

Dev Dependencies
----------------

-   `@babel/core`: A package that provides Babel core functionality.
-   `@babel/preset-env`: A Babel preset that transforms ES6+ code to ES5.
-   `@cypress/code-coverage`: A plugin for generating code coverage reports for Cypress tests.
-   `@istanbuljs/nyc-config-typescript`: A configuration file for Istanbul, a code coverage tool, for use with TypeScript projects.
-   `@testing-library/jest-dom`: A package that provides custom Jest matchers for asserting on DOM nodes.
-   `@testing-library/react`: A package that provides testing utilities for React components.
-   `@testing-library/user-event`: A package that provides utilities for simulating user events.
-   `@types/cypress__code-coverage`: TypeScript definitions for the `@cypress/code-coverage` package.
-   `@types/express`: TypeScript definitions for the `express` package.
-   `@types/jest`: Type definitions for Jest.
-   `@types/node`: TypeScript definitions for the `node` package.
-   `@types/react`: Type definitions for React.
-   `@types/react-dom`: Type definitions for React DOM.
-   `@types/redux-mock-store`: Type definitions for Redux mock store.
-   `@types/serialize-javascript`: TypeScript definitions for the `serialize-javascript` package.
-   `@typescript-eslint/eslint-plugin`: An ESLint plugin for TypeScript.
-   `@typescript-eslint/parser`: An ESLint parser for TypeScript.
-   `@vitejs/plugin-react`: A plugin for Vite that enables React support.
-   `@vitest/coverage-c8`: A package that generates coverage reports using the C8 format.
-   `babel-jest`: A package that allows Jest to use Babel to transform code.
-   `cypress`: End-to-end testing framework.
-   `cypress-vite`: Cypress plugin for Vite.
-   `eslint`: A package that provides a pluggable linting utility for JavaScript and TypeScript.
-   `eslint-config-prettier`: An ESLint configuration that disables rules that conflict with Prettier formatting.
-   `eslint-import-resolver-typescript`: An ESLint import resolver for TypeScript.
-   `eslint-plugin-import`: An ESLint plugin that provides linting rules for importing/exporting in JavaScript/TypeScript.
-   `eslint-plugin-prettier`: An ESLint plugin that formats code using Prettier.

License
-------

This project is licensed under the ISC License. See the `LICENSE` file for details.
