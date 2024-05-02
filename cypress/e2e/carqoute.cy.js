describe ('Information Form', function(){
    it('Should allow users to submit inputs', function(){
        cy.sitevisit()
        cy.car()
        cy.privatevehicle() //To choose private from the vehicle type
        //cy.commercialvehicle() //To choose commercial from the vehicle type
        cy.passenger()
        cy.driver()
        cy.cc() //To select CC from the dropdown
        //cy.ton() //To select Ton from the dropdown
        //cy.seat() //To select Seat from the dropdown
        cy.ccvalue()
        cy.sum()
        //cy.shortpolicy() //To select short period from the dropdown
        cy.fullpolicy() //To select full period from the dropdown
        cy.startdate()
        cy.vregino()
        cy.searchbynid() //To search the customer usin his NID
        //cy.searchbymobile() //To search the customer using his Mobile No
        //cy.searchbybin() //To search the customer using his BIN
        cy.checkbox()
        cy.getqoute()
        cy.backtopreviouspage()
    })
})