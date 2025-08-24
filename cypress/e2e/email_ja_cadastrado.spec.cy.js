describe('Cadastro - E-mail já cadastrado', () => {
  it('Deve exibir mensagem de erro ao tentar cadastrar com e-mail existente', () => {
    // Acessa a tela de cadastro
    cy.visit('http://localhost:3000/cadastro')

    // Preenche os campos do formulário
    cy.get('input[name="name"]').type('UsuarioTeste')
    cy.get('input[type="email"]').type('teste@example.com') // e-mail já existente
    cy.get('input[name="password"]').type('12345678')
    cy.get('input[name="confirmPassword"]').type('12345678')

    // Submete o cadastro
    cy.get('button[type="submit"]').click()

    
    // Valida qualquer mensagem que contenha "email" e "cadastrado"
  cy.on('window:alert', (text) => {
  expect(text).to.match(/email.*cadastrado/i)
})




    // Garante que não redirecionou para a home
    cy.url().should('include', '/cadastro')
  })
})
