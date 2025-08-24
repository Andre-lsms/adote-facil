describe('Excluir Publicação de Animal', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/login')

    cy.get('input[type="email"]').type('teste@example.com')
    cy.get('input[type="password"]').type('12345678')
    cy.get('button[type="submit"]').click()
  })

  it('Deve excluir um animal da lista de Meus Animais', () => {
    // Acessa pelo menu em vez de URL direta
    cy.contains('Meus Animais').click()

    cy.get('.animal-card').should('exist')

    cy.get('.animal-card').first().within(() => {
      cy.contains('Excluir').click()
    })

    cy.contains('Confirmar').click()

    cy.contains('Animal excluído com sucesso').should('be.visible')
  })
})
