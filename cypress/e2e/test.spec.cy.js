describe('DemoPage', () => {
  beforeEach(() => {
    cy.visit('https://htmlpreview.github.io/?https://github.com/DBalto/DemoPage/blob/main/IndexDemoPage.html');
  });

  it('displays the header', () => {
    cy.contains("Daniel's Demo Page");
    cy.contains('Welcome to my demo page where I showcase some of my skills and interests!');
  });

  it('displays the navigation menu', () => {
    cy.contains('About Me');
    cy.contains('Projects');
    cy.contains('Interests');
    cy.contains('Contact Me');
  });

  it('scrolls to the About section when About Me is clicked', () => {
    cy.contains('About Me').click();
    cy.url().should('contain', '#about');
  });

  it('scrolls to the Projects section when Projects is clicked', () => {
    cy.contains('Projects').click();
    cy.url().should('contain', '#projects');
  });

  it('scrolls to the Interests section when Interests is clicked', () => {
    cy.contains('Interests').click();
    cy.url().should('contain', '#interests');
  });

  it('scrolls to the Contact section when Contact Me is clicked', () => {
    cy.contains('Contact Me').click();
    cy.url().should('contain', '#contact');
  });

  it('displays the About section', () => {
    cy.get('#about').should('be.visible');
    cy.contains('About Me');
    cy.contains('Trustworthy Quality Assurance Engineer with 4+ years of experience and dedicated work ethic.');
  });

  it('displays the Projects section', () => {
    cy.get('#projects').should('be.visible');
    cy.contains('Projects');
    cy.contains('Demo Page - A demo page showcasing my skills and interests');
    cy.contains('Weather App - A web application to check the current weather conditions');
  });

  it('displays the Interests section', () => {
    cy.get('#interests').should('be.visible');
    cy.contains('Interests');
    cy.contains('Technology');
    cy.contains('Travel');
    cy.contains('Sports');
  });

  it('displays the Contact section', () => {
    cy.get('#contact').should('be.visible');
    cy.contains('Contact Me');
    cy.contains('Name');
    cy.contains('Email');
    cy.contains('Message');
    cy.contains('Submit');
  });

  it('sends a message when the form is submitted', () => {
    cy.get('#contact-name').type('John Doe');
    cy.get('#contact-email').type('johndoe@example.com');
    cy.get('#contact-message').type('Hello, this is a test message');
    cy.contains('Submit').click();
    cy.contains('Your message has been sent!');
  });
});
