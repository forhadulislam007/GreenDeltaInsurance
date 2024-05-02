describe ('Numeric Validation', function(){
    it('Should check validation for numeric fields', function(){
        cy.sitevisit()
        cy.numericvaluecheck()
        cy.getqoute()
    })
})