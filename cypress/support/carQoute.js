let testData= {}
before(function(){
    cy.fixture('sitedata.json').as('data_set').then(function(data){
        testData.data= data
    })
})

//To get cars qoute after inserting all the informations.
Cypress.Commands.add('car', () =>{
    cy.get('#motorProductName').select(testData.data.vehicle.v2) //Choose car from the dropdown
    cy.wait(2000)
})

Cypress.Commands.add('privatevehicle', () =>{
    cy.get('#vehicleType').select(testData.data.vehicletype.vtype1)
    cy.wait(2000)
})

Cypress.Commands.add('commercialvehicle', () =>{
    cy.get('#vehicleType').select(testData.data.vehicletype.vtype2)
    cy.wait(2000)
})

Cypress.Commands.add('passenger', () =>{
    cy.get('#noofpassenger').type(testData.data.otherinfos.passenger)
    cy.wait(2000)
})

Cypress.Commands.add('driver', () =>{
    cy.get('#noofdriver').type(testData.data.otherinfos.driver)
    cy.wait(2000)
})

Cypress.Commands.add('cc', () =>{
    cy.get('#ccorton').select(testData.data.cctonseat.cc)
    cy.wait(2000)
})

Cypress.Commands.add('ton', () =>{
    cy.get('#ccorton').select(testData.data.cctonseat.ton)
    cy.wait(2000)
})

Cypress.Commands.add('seat', () =>{
    cy.get('#ccorton').select(testData.data.cctonseat.seat)
    cy.wait(2000)
})

Cypress.Commands.add('ccvalue', () =>{
    cy.get('#bikeccvalue').type(testData.data.otherinfos.ccvalue)
    cy.wait(2000)
})

Cypress.Commands.add('sum', () =>{
    cy.get('#sumInsured').type(testData.data.otherinfos.validsum)
    cy.wait(2000)
})

Cypress.Commands.add('shortpolicy', () =>{
    cy.get('#policyPeriod').select(testData.data.policyperiod.short)
    cy.wait(2000)
})

Cypress.Commands.add('fullpolicy', () =>{
    cy.get('#policyPeriod').select(testData.data.policyperiod.full)
    cy.wait(2000)
})

Cypress.Commands.add('startdate', () =>{
    cy.get('#policyStartDate').click()
    cy.get('.ui-datepicker-days-cell-over > .ui-state-default').click()
    cy.wait(2000)
})

Cypress.Commands.add('vregino', () =>{
    cy.get('#vehicleRegistrationNumber').type(testData.data.otherinfos.regino)
    cy.wait(2000)
})

Cypress.Commands.add('searchbynid', () =>{
    cy.get('#customerSearchType').select(testData.data.searchcustomer.nid)
    cy.wait(2000)
    cy.get('#comprehensiveCustomerSearchTypeValue').type(testData.data.otherinfos.nidno)
    cy.wait(2000)
})

Cypress.Commands.add('searchbymobile', () =>{
    cy.get('#customerSearchType').select(testData.data.searchcustomer.mobile)
    cy.wait(2000)
    cy.get('#comprehensiveCustomerSearchTypeValue').type(testData.data.otherinfos.mobileno)
    cy.wait(2000)
})

Cypress.Commands.add('searchbybin', () =>{
    cy.get('#customerSearchType').select(testData.data.searchcustomer.bin)
    cy.wait(2000)
    cy.get('#comprehensiveCustomerSearchTypeValue').type(testData.data.otherinfos.binno)
    cy.wait(2000)
})

Cypress.Commands.add('checkbox', () =>{
    cy.get(':nth-child(4) > .col-md-12 > :nth-child(1)').click()
    cy.wait(500)
    cy.get(':nth-child(4) > .col-md-12 > :nth-child(2)').click()
    cy.wait(500)
    cy.get(':nth-child(4) > .col-md-12 > :nth-child(3)').click()
    cy.wait(500)
    //cy.get(':nth-child(4) > .col-md-12 > :nth-child(4)').click()
    //cy.wait(500)
    //cy.get(':nth-child(4) > .col-md-12 > :nth-child(5)').click()
    //cy.wait(500)
    //cy.get(':nth-child(4) > .col-md-12 > :nth-child(6)').click()
    //cy.wait(500)
    //cy.get(':nth-child(4) > .col-md-12 > :nth-child(7)').click()

    //Remove or add // before these lines as per your need to check the items

    cy.screenshot()
})

Cypress.Commands.add('getqoute', () =>{
    cy.get('#getMotorQuoteButton').click()
    cy.wait(5000)
    cy.screenshot()
    cy.wait(2000)
})

Cypress.Commands.add('backtopreviouspage', () =>{
    cy.get('#motorsumInsuredBox > .top-nav > li > .mt-1').click()
})

