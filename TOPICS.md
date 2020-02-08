# MRM

- What it does Command line tool to help you keep configuration (package.json, .gitignore, .eslintrc, etc.) of your open source projects in sync.

github url [https://github.com/sapegin/mrm]

- Features:
  > Doesn’t overwrite your data unless you want to Minimal changes: keeps the original file formatting or read the style from EditorConfig Minimal configuration: tries to infer configuration from the project itself or from the environment Customizable tasks for popular tools like ESLint, Prettier, lint-staged, etc. included Custom tasks and tools to work with JSON, YAML, INI, Markdown and new line separated text files Sharing tasks via npm and grouping them into presets

you should go to `Tastks` and select what you need for project and just follow the instruction in each section.

# String module

- every thing you need to work with strings, it does not use regex so it is safe enough please read the documentation :

> [https://www.npmjs.com/package/string]

> [https://github.com/jprichardson/string.js]

# Logging

- I find `winston` as a proper package to log events in this app. Here are npm link and the way we can use this package:

> [https://www.npmjs.com/package/winston]

> [https://www.loggly.com/ultimate-guide/node-logging-basics/]

logs will be saved in project directory in `logs` folder.

# Jest

- I have used `jest` as testing tool for this application, here is a good documention for that:

> [https://flaviocopes.com/jest/]

# Axios

- Promise based HTTP client for the browser and node.js

> [https://www.npmjs.com/package/axios]

## Mocking axios

 - Mocking Axios in Jest + Testing Async Functions

 > [https://www.leighhalliday.com/mocking-axios-in-jest-testing-async-functions]

## How to make HTTP requests like a pro with Axios

  - Why Axios?
    As with Fetch, Axios is promise-based. However, it provides a more powerful and flexible feature set. 

 > [https://blog.logrocket.com/how-to-make-http-requests-like-a-pro-with-axios/]

## Unit testing node CLI apps with Jest

  - This article explains the process I went through when adding unit tests to my CLI app ‘testemail’. This is not intended to be a guide for every project, but a look into the challenges I faced, and how I solved them.

  > [https://medium.com/@altshort/unit-testing-node-cli-apps-with-jest-2cd4adc599fb]

