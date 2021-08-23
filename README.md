# Background info:

App under test: http://todomvc-app-for-testing.surge.sh/

# Cypress configurations

### Turn off watcher functionality

With Cypress watcher turned on, it will run tests everytime a test change happens. To run tests only when we ask it to:

Cypress.json

```
"watchForFileChanges": false
```

# Special keys

To have cypress type enter:

```
cy.type('a thing{enter}')
```

# Timeouts and delays

Delay: Add a `?delay-{selector}-{milliseconds}`

Timeout: Add timeout to the .get call: `cy.get('selector', {timeout: ms})`

# Advantages of Cypress

Because Cypress runs in the browser, it has easy access to css properties

# Grouping with mocha

To run only one test, add `.only` to the `it` or `describe` block
