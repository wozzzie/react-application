/// <reference types="cypress" />

describe('RoutesComponent', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('should display the home page', () => {
    cy.get('[data-testid="main-page"]').should('be.visible');
    cy.contains('Think green and plant something').should('be.visible');
  });

  it('should navigate to the about page', () => {
    cy.get('[data-testid="about-link"]').click();
    cy.url().should('include', '/about');
    cy.get('[data-testid="about-page"]').should('be.visible');
    cy.contains('Welcome to our Plants Store About Page!').should('be.visible');
  });

  it('should display the error page for invalid routes', () => {
    cy.visit('/invalid-route');
    cy.get('[data-testid="error-page"]').should('be.visible');
    cy.contains('Oops! Something went wrong. Please try again later.').should('be.visible');
  });

  it('should navigate to the new card page', () => {
    cy.get('[data-testid="card-link"]').click();
    cy.url().should('include', '/card');
    cy.get('[data-testid="card-page"]').should('be.visible');
  });
});
