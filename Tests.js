describe('Test Automation Page', () => {
  beforeEach(() => {
    cy.visit('path/to/your/test/automation/page');
  });

  it('should add a name to the list', () => {
    const name = 'Alice';
    cy.get('#name').type(name);
    cy.get('#add-btn').click();
    cy.get('#name-list li').last().should('have.text', name);
  });

  it('should clear the name list', () => {
    cy.get('#name').type('Bob');
    cy.get('#add-btn').click();
    cy.get('#clear-btn').click();
    cy.get('#name-list').should('not.have.descendants', 'li');
  });
});
