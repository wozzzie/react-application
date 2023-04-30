/// <reference types="cypress" />

describe('About component', () => {
  const title = 'Welcome to our Plants Store About Page!';
  const message =
    'We offer a wide selection of indoor and outdoor plants. Plants not only enhance your surroundings but also improve your well-being. We are committed to providing high-quality plants. Let us help you find the perfect plant for your space and provide you with the knowledge and resources to help it thrive. Thank you for choosing our Plants Store!';

  beforeEach(() => {
    cy.visit('/about');
  });

  it('displays the title and message', () => {
    cy.get('[data-testid="about-page"]').should('be.visible');
    cy.contains(title).should('be.visible');
    cy.contains(message).should('be.visible');
  });

  it('has a background image', () => {
    cy.get('.about__img').should('have.css', 'background-image').and('not.be.empty');
  });
});
