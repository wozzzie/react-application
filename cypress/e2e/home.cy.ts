/// <reference types="cypress" />

describe('Home component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays a list of cards', () => {
    cy.get('[data-testid="card"]').should('have.length.gte', 1);
  });

  it('filters cards by search term', () => {
    cy.get('[data-testid="search-input"]').type('Monstera');
    cy.get('[data-testid="search-form"]').submit();
    cy.get('[data-testid="card-title"]').should('contain', 'Monstera');
  });

  it('displays a modal when a card is clicked', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="card-modal"]').should('be.visible');
  });

  it('closes the modal when the close button is clicked', () => {
    cy.get('[data-testid="card"]').first().click();
    cy.get('[data-testid="card-modal"]').should('be.visible');
    cy.get('[data-testid="card-modal-close-button"]').click();
    cy.get('[data-testid="card-modal"]').should('not.exist');
  });
});
