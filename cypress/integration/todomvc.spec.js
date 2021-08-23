/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
  let myToDo = 'sweep the floors';
  cy.visit('http://todomvc-app-for-testing.surge.sh/');
  cy.get('.new-todo', { timeout: 6000 }).type(myToDo + '{enter}');

  cy.get('label').should('have.text', myToDo);

  cy.get('toggle').should('not.be.checked');

  cy.get('.toggle').click();

  // assert that after checking off an item, it is struck through
  cy.get('label').should('have.css', 'text-decoration-line', 'line-through');

  cy.contains('Clear completed').click();

  cy.get('.todo-list').should('not.have.descendants', 'li');
});
