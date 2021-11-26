Cypress.Commands.add('login', (email = 'lazur.niko+1@gmail.com', password = '12345qwert!') => {
  cy.visit('/');
  cy.contains('[href="https://www.evernote.com/Login.action?referralSpecifier=mktgrepack_en_oo_web_hpg_V03"]', 'Already have an account? Log in')
    .click();
  cy.get('[placeholder="Email address or username"]')
    .type(email);
  cy.get('[id="loginButton"]')
    .click();
  cy.get('[placeholder="Password"]')
    .type(password);
  cy.get('[id="loginButton"]')
    .click();
  cy.url().should('include', 'https://www.evernote.com/Home.action');
});