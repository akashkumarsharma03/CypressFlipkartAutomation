import 'cypress-xpath';

describe('Flipkart test suite', () => {
  before('FT1', () => {
    cy.visit('https://www.flipkart.com/');
    cy.title().should('eq', 'Online Shopping Site for Mobiles, Electronics, Furniture, Grocery, Lifestyle, Books & More. Best Offers!');
  });

  it('search', () => {
    cy.get('._3704LK').type('iphone 12');
    cy.get('.L0Z3Pu').click();
    cy.xpath('//*[@id="container"]/div/div[3]/div[1]/div[2]/div[2]/div/div/div/a').invoke('removeAttr', 'target').click()
    cy.get('.row > :nth-child(1) > ._2KpZ6l').click()
  })

})
