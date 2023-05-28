describe('Teste End-to-End', () => {
    it('Teste 1: Visita Página', () => {
      cy.visit('http://localhost:5000/');

    })

    it('Teste 2: Verifica item na página', () => {
        cy.get('[data-id=3]').should('contain.text', 'Design Patterns')
    })

    it('Teste 3: Calcula Frete', () => {    
        // Calcula o frete
        cy.get('[data-id=3]').within(() => {
           cy.get('input').type('10000-000')
           cy.contains('Calcular Frete').click().then
           cy.wait(2000)
        })

        cy.get('.swal-text').contains('O frete é: R$')

        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })

    it('Teste 4: Simula compra', () => {
        cy.get('[data-id=3]').within(() => {
            cy.contains('Comprar').click().then
            cy.wait(2000)
        })
        
        // Fecha o pop-up com o preço do frete
        cy.get('.swal-button').click()
    })
  })