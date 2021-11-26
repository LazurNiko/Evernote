describe ('', () => {

  beforeEach(() => {
    cy.login();
  })

  it('Username should display at page when login', () => {
    cy.get('#gwt-debug-Sidebar-newNoteButton-container > .GJ1NOG4CDR > div > .GJ1NOG4CCR')
      .click({force: true});
      cy.get('#gwt-debug-NoteTitleView-textBox')
      .type('My very first note at Evernote ever{enter}');
      cy.get('#entinymce_492_ifr')
      .click({force: true})
        .type(`This is my very first note, and I've decided to publish it{enter}`, {force: true});
    cy.contains('#gwt-debug-NoteAttributes-doneButton', 'Done')
    .click({force: true})
      
    cy.get('#gwt-debug-NoteAttributes-doneButton')
      .click();
    cy.contains('.GJ1NOG4CIOB', 'My very first note at Evernote ever');
    cy.contains('.GJ1NOG4CONB', `This is my very first note, and I've decided to publish it`);
  });
})