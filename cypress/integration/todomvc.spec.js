/// <reference types="cypress" />

it('should be able to add a new todo to the list', () => {
  let myToDo = 'sweep the floors';
  cy.visit('http://todomvc-app-for-testing.surge.sh/');
  cy.get('.new-todo', { timeout: 6000 }).type(myToDo + '{enter}');

  cy.get('label').should('have.text', myToDo);

  //   cy.get('.toggle').click();
  //   cy.contains('Clear completed').click();
});