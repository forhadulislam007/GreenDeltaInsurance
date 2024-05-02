let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

//Click on the Get Qoute without submitting any required informations.
Cypress.Commands.add('mandatoryfields', () =>{
    cy.get('#getMotorQuoteButton').click()
    cy.screenshot()
})
