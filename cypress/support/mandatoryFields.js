let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

Cypress.Commands.add('sitevisit', () =>{
    cy.visit(testData.data.sitedata.siteURL)
    // cy.takeScreenshot()
    cy.wait(1000)
})

//Click on the Get Qoute without submitting any required informations.
Cypress.Commands.add('mandatoryfields', () =>{
    cy.get('#getMotorQuoteButton').click()
})
