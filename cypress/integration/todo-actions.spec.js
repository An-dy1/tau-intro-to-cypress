/// <reference types="cypress" />

describe('user can perform todo actions', () => {
  let myToDo = 'sweep the floors';

  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo', { timeout: 6000 }).type(myToDo + '{enter}');
  });
  it('should add a new todo to the list', () => {
    cy.get('label').should('have.text', myToDo);
    cy.get('toggle').should('not.be.checked');
  });

  it('should mark a todo as complete', () => {
    cy.get('.toggle').click();

    // assert that after checking off an item, it is struck through
    cy.get('label').should('have.css', 'text-decoration-line', 'line-through');
  });

  it('should clear completed todos', () => {
    cy.get('.toggle').click();
    cy.contains('Clear completed').click();

    cy.get('.todo-list').should('not.have.descendants', 'li');
  });
});
