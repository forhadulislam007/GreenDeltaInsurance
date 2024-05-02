let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

Cypress.Commands.add('sitevisit', () =>{
    cy.visit(testData.data.sitedata.siteURL)
    // cy.takeScreenshot()
})
