# RJSF Tailwind Theme

A beautiful Tailwind CSS theme for [React JSON Schema Form](https://github.com/rjsf-team/react-jsonschema-form).

## Installation

```bash
npm install @pankajpatel/rjsf-tailwind
# or
yarn add @pankajpatel/rjsf-tailwind
```

## Usage

```tsx
import { RJSFTailwindTheme } from "@pankajpatel/rjsf-tailwind";
import Form from "@rjsf/core";
import validator from "@rjsf/validator-ajv8";

const schema = {
  title: "Todo",
  type: "object",
  required: ["title"],
  properties: {
    title: { type: "string", title: "Title", default: "A new task" },
    done: { type: "boolean", title: "Done?", default: false }
  }
};

function App() {
  return (
    <Form
      schema={schema}
      validator={validator}
      theme={RJSFTailwindTheme}
      onSubmit={console.log}
    />
  );
}
```

## Features

- 🎨 Beautiful Tailwind CSS styling
- 🌙 Dark mode support
- 🎯 Fully customizable with Tailwind classes
- ♿️ Accessible components
- 📱 Responsive design
- 🔧 Easy to extend and customize

## Demo

Visit our live demo site at [https://pankajpatel.github.io/rjsf-tailwind](https://pankajpatel.github.io/rjsf-tailwind) to see the theme in action.

The demo is automatically deployed when:
1. A new release is published
2. Manual deployment is triggered via GitHub Actions

To run the demo locally:
```bash
yarn install
yarn dev
```

## Customization

### Theme Customization

You can customize the theme by extending Tailwind's configuration:

```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './node_modules/@pankajpatel/rjsf-tailwind/dist/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      // Your custom theme configuration
    }
  }
}
```

### Component Customization

You can customize individual form components using the `uiSchema` prop:

```tsx
const uiSchema = {
  "ui:classNames": "custom-class",
  title: {
    "ui:widget": "textarea"
  }
};

<Form
  schema={schema}
  uiSchema={uiSchema}
  validator={validator}
  theme={RJSFTailwindTheme}
/>
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes following the [Conventional Commits](https://www.conventionalcommits.org/) specification:
   - `feat: add new feature` - for new features
   - `fix: resolve bug` - for bug fixes
   - `docs: update readme` - for documentation
   - `chore: update deps` - for dependency updates
   - `style: format code` - for styling changes
   - `refactor: improve code` - for code improvements
   - `test: add tests` - for testing
   - `perf: improve performance` - for performance improvements
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## Releases

This package follows [Semantic Versioning](https://semver.org/). To publish a new version:

1. Create a new release on GitHub:
   - Go to the repository's Releases page
   - Click "Create a new release"
   - Create a new tag in the format `x.y.z` (e.g., `1.0.0`)
   - Add release notes describing the changes
   - Publish the release

2. The GitHub Action will automatically:
   - Build the package
   - Publish to NPM
   - Deploy the demo site

To create a release:
- Major version (x.0.0): Breaking changes
- Minor version (0.x.0): New features
- Patch version (0.0.x): Bug fixes and patches

## License

ISC

## Development

To start development:

```bash
# Install dependencies
yarn install

# Start development
yarn dev

# Build
yarn build
