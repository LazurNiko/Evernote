describe (`Unregistered user should'nt be able to login`, () => {

  let nonExistingUser = {
    email: 'userlol@mail.com',
    password: '12345Qwer$',
  };

  it(`User with unregistered user email should'nt be able to login`, () => {
    cy.visit('/');
    cy.contains('[href="https://www.evernote.com/Login.action?referralSpecifier=mktgrepack_en_oo_web_hpg_V03"]', 'Already have an account? Log in')
    .click();
    cy.get('[placeholder="Email address or username"]')
      .type(nonExistingUser.email);
    cy.get('[id="loginButton"]')
      .click();
    cy.get('#responseMessage')
      .should('contain', 'There is no account for the username or email you entered.')
  });

  it(`Registered email user with invalid password should'nt be able to login`, () => {
    cy.visit('/');
    cy.contains('[href="https://www.evernote.com/Login.action?referralSpecifier=mktgrepack_en_oo_web_hpg_V03"]', 'Already have an account? Log in')
    .click()
    cy.get('[placeholder="Email address or username"]')
      .type('lazur.niko+1@gmail.com');
    cy.get('[id="loginButton"]')
    .click();
    cy.get('#password')
    .type(nonExistingUser.password);
  cy.get('[id="loginButton"]')
    .click();
    cy.get('.error-status')
      .should('contain', 'Incorrect password.')
  });
});

  describe('Registered user should be able to create new note', () => {

    beforeEach(() => {
      cy.login();
    })
  
    it('User should be able to create a new note', () => {
      cy.get('#gwt-debug-Sidebar-newNoteButton-container > .GJ1NOG4CDR > div > .GJ1NOG4CCR')
        .click()
        .type('  My very first note at Evernote ever{enter}');
      cy.contains('#gwt-debug-NoteAttributes-doneButton', 'Done')
      .click({force: true});
      cy.get('#gwt-debug-NoteAttributes-doneButton')
        .click({force: true});
      cy.get('.GJ1NOG4CNP')
        .click()
      cy.get('#gwt-debug-AccountMenuPopup-root')
        .should('contain', 'lazur.niko+1@gmail.com');
      cy.get('#gwt-debug-AccountMenu-logout > .GJ1NOG4CO3 > .GJ1NOG4CBD')
        .click();
      cy.url()
        .should('include', '/logged-out');
      cy.get('h1')
        .should('contain', 'You have logged out of Evernote.');
    });      
  
      it('User be able to find a created article when login', () => {
        cy.get('#gwt-debug-Sidebar-notesButton-container > .GJ1NOG4CDR > div > .GJ1NOG4CCR')
          .click();
        cy.get('.focus-NotesView-Note-noteTitle.qa-title')
          .should('contain', 'My very first note at Evernote ever');
      });
  
      it('User be able to delete article', () => {
        cy.get('#gwt-debug-NoteAttributes-trashButton')
          .click();
        cy.get('#gwt-debug-GlassModalDialog-dialogContent')
          .should('contain', 'Are you sure you want to delete ');
        cy.get('#gwt-debug-ConfirmationDialog-confirm')
          .click();
        cy.get('.gwt-HTML')
          .should('contain', 'moved to ')
          .and('contain', 'Trash')
      });
  })
