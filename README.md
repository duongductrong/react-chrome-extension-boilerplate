<p align="center">
  <!-- <img src="logo.svg" width="200px" align="center" alt="Zod logo" /> -->
  <h1 align="center">Chrome Extension Boilerplate</h1>
  <p align="center">
    ✨ <a href="https://github.com/duongductrong/chrome-extension-boilerplate">chrome-extension-boilerplate</a> ✨
    <br/>
    Chrome Extension
  </p>
</p>

<p align="center">
<a href="https://github.com/duongductrong" rel="nofollow"><img src="https://img.shields.io/badge/created%20by-@duongductrong-4BBAAB.svg" alt="Created by Trong Duong / Daniel"></a>
</p>

This project is a boilerplate for creating Chrome extensions using React and TypeScript. It provides a structured setup with various scripts and configurations to streamline the development process.

## Features

- React-based popup, options, and page scripts
- TypeScript support
- Shadow DOM implementation for content scripts
- Build configuration using tsup
- ESLint and Prettier for code linting and formatting
- Dependabot integration for automated dependency updates

## Project Structure

The project is organized as follows:

- `src/`: Contains the source code
  - `assets/`: Static assets
  - `lib/`: Utility functions and components
  - `scripts/`: Extension scripts (background, content, popup, options, page)
- `dist/`: Output directory for built files
- Configuration files for TypeScript, ESLint, and build tools

## Setup

1. Clone the repository
2. Install dependencies:
   ```
   pnpm install
   ```

## Development

To start development, run:

```
pnpm dev
```

This will watch for file changes and rebuild the extension.

## Building

To build the extension for production, run:

```
pnpm build
```

The built files will be available in the `dist/` directory.

## Scripts

- `dev`: Start development mode
- `build`: Build the extension for production
- `lint`: Run ESLint
- `format`: Run Prettier

## Configuration

- TypeScript configuration: `tsconfig.json`
- ESLint configuration: `.eslintrc.js`
- Build configuration: `tsup.config.ts`

## Shadow DOM

The project uses Shadow DOM for content scripts to isolate styles. The implementation can be found in:

## Rendering

The `renderer` function in `src/lib/renderer.tsx` is used to render React components within the Shadow DOM:

## Contributing

Contributions are welcome! Please follow the existing code style and add unit tests for any new or changed functionality.

## License

MIT
