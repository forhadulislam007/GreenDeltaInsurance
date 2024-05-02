describe ('sitevisit', function(){
    it('Should load data', function(){
        cy.sitevisit()
        cy.motorcycle() //To search Motor Cycle from the dropdown
        //cy.car() //To search Car from the dropdown
        //cy.truck() //To search Truck from the dropdown
        //cy.bus() //To search Bus from the dropdown
        //cy.ambulance() //To search Ambulance from the dropdown
    })
})