describe('HeaderComponent', () => {

  it('should render the logo', () => {
    cy.get('img[alt="Logo"]').should('be.visible');
  });

  it('should navigate to home when the Home link is clicked', () => {
    cy.get('.nav-menu a').contains('Home').click();
    cy.url().should('include', '/home');
  });

  it('should navigate to services when the Services link is clicked', () => {
    cy.get('.nav-menu a').contains('Services').click();
    cy.url().should('include', '/services');
  });

  it('should navigate to devices inventory when the Devices link is clicked', () => {
    cy.get('.nav-menu a').contains('Devices').click();
    cy.url().should('include', '/devices/inventory');
  });

  it('should navigate to system when the System link is clicked', () => {
    cy.get('.nav-menu a').contains('System').click();
    cy.url().should('include', '/system');
  });

  it('should open the workspace dropdown menu and display options', () => {
    cy.get('.dropdown-btn').click();
    cy.get('span').contains('Option 1').should('be.visible');
    cy.get('span').contains('Option 2').should('be.visible');
    cy.get('span').contains('Option 3').should('be.visible');
  });

  it('should open the user dropdown menu and display user options', () => {
    cy.get('.nav-icons').find('button').click();
    
    cy.get('.user-dropdown').should('be.visible');
    cy.get('.user-dropdown').contains('User Dev').should('be.visible');
    cy.get('.user-dropdown').contains('HPE UserAccount Details').should('be.visible');
    cy.get('.user-dropdown').contains('HPE GreenLake Preferences').should('be.visible');
    cy.get('.user-dropdown').contains('Sign out of HPE').should('be.visible');
  });

  it('should navigate to notifications page when the notifications icon is clicked', () => {
    cy.get('.nav-icons').find('svg').first().click();
    cy.url().should('include', '/notifications');
  });

  it('should navigate to settings page when the settings icon is clicked', () => {
    cy.get('.nav-icons').find('svg').eq(1).click();
    cy.url().should('include', '/settings');
  });

  it('should navigate to help page when the help icon is clicked', () => {
    cy.get('.nav-icons').find('svg').eq(2).click();
    cy.url().should('include', '/help');
  });

  it('should not display the user dropdown before clicking', () => { 
    cy.get('.user-dropdown').should('not.exist');
  });

  it('should handle sign out button click (placeholder test)', () => {
    cy.get('.nav-icons').find('button').click();
    cy.get('.user-dropdown').contains('Sign out of HPE').click();
  });
});