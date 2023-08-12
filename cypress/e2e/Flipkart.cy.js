describe('Flipkart test suit', () => {

  it('FT1', () => {
    cy.visit('https://www.flipkart.com/')
    cy.title().should('eq','Flipkart')
  })


})