/// <reference types="cypress" />

describe('Form component', () => {
  it('should submit a new card when the form is filled out and submitted', () => {
    const card = {
      authorName: 'Elon Mask',
      requirements: 'Requirements for growing plants...',
      date: '2023-05-01',
      location: 'Belarus',
      title: 'Mr',
      isChecked: true,
      file: 'image.png',
    };

    cy.visit('/card');

    cy.get('input[name="authorName"]').type(card.authorName);
    cy.get('input[name="authorName"]').should('have.value', card.authorName);

    cy.get('textarea[name="requirements"]').type(card.requirements);
    cy.get('textarea[name="requirements"]').should('have.value', card.requirements);

    cy.get('input[name="date"]').type(card.date);
    cy.get('input[name="date"]').should('have.value', card.date);

    cy.get('select[name="location"]').select(card.location);
    cy.get('select[name="location"]').should('have.value', card.location);

    cy.get('input[name="isChecked"]').check({ force: true });
    cy.get('input[name="isChecked"]').should('be.checked');

    cy.get('[data-testid="form-component"]')
      .find('input[name="file"]')
      .selectFile(
        {
          fileName: 'image.png',
          contents: ['image'],
        },
        { force: true }
      );

    cy.get(`input[type="radio"][name="title"][value="${card.title}"]`).check({ force: true });
    cy.get(`input[type="radio"][name="title"][value="${card.title}"]`).should('be.checked');

    cy.get('[data-testid="submit-button"]').click();

    cy.contains('The form is submitted').should('be.visible');
    cy.get('[data-testid="card-page"]').last().as('newCard');
    cy.get('@newCard')
      .find('[data-testid="card-authorName"]')
      .should('have.text', `${card.title} ${card.authorName}`);
    cy.get('@newCard')
      .find('[data-testid="card-requirements"]')
      .should('have.text', `Your requirements: ${card.requirements}`);
    cy.get('@newCard')
      .find('[data-testid="card-date"]')
      .should('have.text', `Shipping date: ${card.date}`);
    cy.get('@newCard')
      .find('[data-testid="card-location"]')
      .should('have.text', `Your location: ${card.location}`);
    cy.get('@newCard').find('[data-testid="card-file"]').should('exist');
  });
});
