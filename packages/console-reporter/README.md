# Serenity/JS

[Serenity/JS](https://serenity-js.org) is a Node.js library designed to make acceptance and regression testing
of modern full-stack applications faster, more collaborative and easier to scale.

## Serenity/JS Console Reporter

The `@serenity-js/console-reporter` module reports the progress of your Serenity/JS tests to the terminal.

The `ConsoleReporter` supports both colour and monochromatic output, as well as simple colour themes for terminals
with dark and light backgrounds.

### Installation

```console
npm install --save-dev @serenity-js/core @serenity-js/console-reporter
```

#### Windows

If you're on Windows, consider using [Windows Terminal](https://github.com/microsoft/terminal)
instead of `cmd.exe` to benefit from the colour output.

### Usage

To allow Serenity/JS to print the progress report to standard output, assign the `ConsoleReporter` to the `Stage`.

This can be done in your `protractor.conf.js` file if you're using Protractor, or programmatically.

#### Programmatic configuration

```typescript
import { configure } form '@serenity-js/core';
import { ConsoleReporter } form '@serenity-js/console-reporter';

configure({
    crew: [
        ConsoleReporter.withDefaultColourSupport(),
    ],
});
```

#### Protractor

```javascript
// protractor.conf.js

const { ConsoleReporter } = require('@serenity-js/console-reporter');

exports.config = {
  framework:      'custom',
    frameworkPath: require.resolve('@serenity-js/protractor/adapter'),
    serenity: {
      crew: [
        ConsoleReporter.withDefaultColourSupport(),
      ],
      // other Serenity/JS config
    },
    // other Protractor config
 };
```

#### Colour Themes

Consult the API docs of the `ConsoleReporter` class to learn more about the supported colour themes.
