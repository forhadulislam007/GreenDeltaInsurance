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

Cypress.Commands.add('numericvaluecheck', () =>{
    cy.get('#sumInsured').type(testData.data.otherinfos.sum)
})

Cypress.Commands.add('getqoute', () =>{
    cy.get('#getMotorQuoteButton').click()
})