# Background info:

App under test: http://todomvc-app-for-testing.surge.sh/

# Running Cypress

## In interactive mode:

`npx cypress open`

## In CI mode:

`npx cypress run`

- This runs the test in headless mode
- Generates a command-line report
- generates a videos directories that you can playback
- add `--help` for run options
- To run just one test file: `--spec {directory}`

# Cypress configurations

### Add conventional test script to package.json

In package.json:

```json
"scripts": {
    "cypress": "cypress open",
    "test": "cypress run"
}
```

- can now run `npm test` and CI mode will begin

### Turn off watcher functionality

With Cypress watcher turned on, it will run tests everytime a test change happens. To run tests only when we ask it to:

Cypress.json

```
"watchForFileChanges": false
```

### Timeouts and delays

Delay: Add a `?delay-{selector}-{milliseconds}`

Timeout: Add timeout to the .get call: `cy.get('selector', {timeout: ms})`

# Special keys

To have cypress type enter:

```
cy.type('a thing{enter}')
```

# Advantages of Cypress

Because Cypress runs in the browser, it has easy access to css properties

### Grouping with mocha

To run only one test, add `.only` to the `it` or `describe` block
