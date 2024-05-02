let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

Cypress.Commands.add('termsofuse', () =>{
    cy.get('.footer-bottom-list > li > a').click()
    cy.wait(2000)
    cy.screenshot({ capture: 'fullPage', scale: true })
})

// Command for returning to previous page
Cypress.Commands.add('goBack', () => {
    cy.window().then((win) => {
      win.history.back();
    });
  });
  