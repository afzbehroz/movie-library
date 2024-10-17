describe('Movie App', () => {
  it('loads the homepage', () => {
    cy.visit('http://localhost:5173/');  // Visit your local app

    // Check if the title "Movie Site" is visible
    cy.contains('Movie Site').should('be.visible');
  });
});
