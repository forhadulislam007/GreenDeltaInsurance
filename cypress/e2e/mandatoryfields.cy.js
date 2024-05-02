describe ('Mandatory Field Check', function(){
    it('Should check mandatory fields', function(){
        cy.sitevisit()
        cy.mandatoryfields()
    })
})