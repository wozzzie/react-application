/// <reference types="cypress" />

describe('SearchBar Component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the search bar', () => {
    cy.get('[data-testid="search-bar"]').should('be.visible');
  });

  it('displays the search input', () => {
    cy.get('[data-testid="search-input"]').should('be.visible');
  });

  it('allows user to enter a search term', () => {
    const searchTerm = 'monstera';
    cy.get('[data-testid="search-input"]').type(searchTerm);
    cy.get('[data-testid="search-input"]').should('have.value', searchTerm);
  });
});
