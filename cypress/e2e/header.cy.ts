describe('Header component', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('displays the correct title on the home page', () => {
    cy.get('.header__title').should('have.text', 'Home');
  });

  it('displays the correct title on the about page', () => {
    cy.visit('/about');
    cy.get('.header__title').should('have.text', 'About');
  });

  it('displays the correct title on the card page', () => {
    cy.visit('/card');
    cy.get('.header__title').should('have.text', 'Your card');
  });

  it('displays the correct title on the error page', () => {
    cy.visit('/dsds');
    cy.get('.header__title').should('have.text', '404');
  });

  it('navigates to the correct page when the main link is clicked', () => {
    cy.get('[data-testid="main-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/');
  });

  it('navigates to the correct page when the about link is clicked', () => {
    cy.get('[data-testid="about-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/about');
  });

  it('navigates to the correct page when the card link is clicked', () => {
    cy.get('[data-testid="card-link"]').click();
    cy.url().should('eq', Cypress.config().baseUrl + '/card');
  });

  it('highlights the active link correctly', () => {
    cy.get('[data-testid="about-link"]').click();
    cy.get('[data-testid="about-link"]').should('have.class', 'header__link_active');

    cy.get('[data-testid="card-link"]').click();
    cy.get('[data-testid="card-link"]').should('have.class', 'header__link_active');

    cy.get('[data-testid="main-link"]').click();
    cy.get('[data-testid="main-link"]').should('have.class', 'header__link_active');
  });
});
