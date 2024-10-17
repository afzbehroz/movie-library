// cypress/e2e/spec.cy.js

describe('Movie App', () => {
  it('should display the Search Movies button', () => {
    // Visit your app's homepage
    cy.visit('http://localhost:5173');

    // Check if the "Search Movies" button is visible
    cy.contains('Search Movies').should('be.visible');
  });
});
