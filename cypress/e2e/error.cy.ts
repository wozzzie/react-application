describe('Error component', () => {
  it('displays the error message', () => {
    const errorMessage = 'Oops! Something went wrong. Please try again later.';
    cy.visit(`/error?message=${errorMessage}`);

    cy.get('[data-testid="error-page"]').should('exist');
    cy.get('.error__link').should('have.text', errorMessage);
  });

  it('displays a 404 message by default', () => {
    cy.visit('/error');

    cy.get('[data-testid="error-page"]').should('exist');
    cy.get('.error__404').should('exist');
  });
});
