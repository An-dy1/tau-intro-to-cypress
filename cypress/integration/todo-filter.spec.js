/// <reference types="cypress" />

describe('user can filter their todo list', () => {
  beforeEach(() => {
    cy.visit('http://todomvc-app-for-testing.surge.sh/');
    cy.get('.new-todo').type('make Greek salad{enter}');
    cy.get('.new-todo').type('make salsa{enter}');
    cy.get('.new-todo').type('marinate chicken{enter}');

    cy.get('.todo-list li:nth-child(2) .toggle').click();
  });

  it('user can view only active todo items', () => {
    cy.contains('Active').click();

    // validate there are only two items in the to-do list now
    cy.get('.todo-list li').should('have.length', 2);
  });

  it('user can view only completed todo items', () => {
    cy.contains('Completed').click();

    // validate there are only two items in the to-do list now
    cy.get('.todo-list li').should('have.length', 1);
  });

  it('user can view all todo items', () => {
    cy.contains('All').click();

    // validate there are only two items in the to-do list now
    cy.get('.todo-list li').should('have.length', 3);
  });
});
