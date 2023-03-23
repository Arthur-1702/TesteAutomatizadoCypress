describe('Teste login', () => {

    beforeEach(() => {
      cy.visit('https://alura-fotos.herokuapp.com')
     })

    it('fazer login de usuario valido', () => {
        cy.login(Cypress.env('userName'),Cypress.env('password'));
        cy.contains('a', '(Logout)').should('be.visible');     
    })

    it('fazer login de usuario invalido', () => {
        cy.login('jake','1234');
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Invalid user name or password')
        });     
    })

})

