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

  it('should display an error if no name is entered', () => {
    cy.get('#add-btn').click();
    cy.get('#name-error').should('have.text', 'Please enter a name.');
  });

  it('should not add a name if no name is entered', () => {
    cy.get('#add-btn').click();
    cy.get('#name-list').should('not.have.descendants', 'li');
  });

  it('should display an error if name is too long', () => {
    const longName = 'This is a very long name that exceeds the maximum length allowed by the application.';
    cy.get('#name').type(longName);
    cy.get('#add-btn').click();
    cy.get('#name-error').should('have.text', 'Name is too long.');
  });

  it('should not add a name if name is too long', () => {
    const longName = 'This is a very long name that exceeds the maximum length allowed by the application.';
    cy.get('#name').type(longName);
    cy.get('#add-btn').click();
    cy.get('#name-list').should('not.have.descendants', 'li');
  });

  it('should delete a name from the list', () => {
    cy.get('#name').type('Charlie');
    cy.get('#add-btn').click();
    cy.get('#name-list li').should('have.length', 1);
    cy.get('#name-list li button').click();
    cy.get('#name-list').should('not.have.descendants', 'li');
  });

  it('should edit a name in the list', () => {
    const newName = 'David';
    cy.get('#name').type('Daniel');
    cy.get('#add-btn').click();
    cy.get('#name-list li').should('have.text', 'Daniel');
    cy.get('#name-list li button').click();
    cy.get('#edit-name').type(newName);
    cy.get('#save-name').click();
    cy.get('#name-list li').should('have.text', newName);
  });
});
