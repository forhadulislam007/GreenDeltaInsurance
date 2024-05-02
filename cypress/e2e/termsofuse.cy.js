describe ('Terms of Use', function(){
    it('Should load the Terms of Use', function(){
        cy.sitevisit()
        cy.termsofuse()
        cy.goBack()
    })
})