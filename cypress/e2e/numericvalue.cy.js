describe ('sitevisit', function(){
    it('Should load data', function(){
        cy.sitevisit()
        cy.numericvaluecheck()
        cy.getqoute()
    })
})