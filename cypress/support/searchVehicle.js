let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

Cypress.Commands.add('motorcycle', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v1)
    cy.screenshot()
})

Cypress.Commands.add('car', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v2)
    cy.screenshot()
})

Cypress.Commands.add('truck', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v3)
    cy.screenshot()
})

Cypress.Commands.add('bus', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v4)
    cy.screenshot()
})

Cypress.Commands.add('ambulance', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v5)
    cy.screenshot()
})