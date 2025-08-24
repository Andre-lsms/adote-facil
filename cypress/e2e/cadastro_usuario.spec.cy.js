describe('Cadastro de Usuário', () => {
  it('Deve cadastrar um novo usuário com sucesso', () => {
    // Acessa a tela de cadastro
    cy.visit('http://localhost:3000/cadastro')

    // Campo de nome (se for "name" em inglês)
    cy.get('input[name="name"]').type('UsuarioTeste')

    // Campo de e-mail
    cy.get('input[name="email"]').type(`usuario${Date.now()}@example.com`)

    // Campo de senha
    cy.get('input[name="password"]').type('12345678')

    // Campo de confirmação de senha
    cy.get('input[name="confirmPassword"]').type('12345678')

    // Envia o formulário
    cy.get('button[type="submit"]').click()

    // Valida mensagem ou redirecionamento
    cy.contains(/cadastro realizado com sucesso/i, { timeout: 10000 }).should('be.visible')
        .then(() => {
        cy.url().should('include', '/login') // caso redirecione pro login
      })
  })
})
