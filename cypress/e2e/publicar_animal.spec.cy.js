describe('Publicação de Animal para Adoção', () => {
  beforeEach(() => {
    // Faz login antes de cada teste
    cy.visit('http://localhost:3000/login');
    cy.get('input[name="email"]').type('teste@example.com');
    cy.get('input[name="password"]').type('12345678');
    cy.get('button[type="submit"]').click();
    
    // Aguarda a conclusão do login (valida redirecionamento ou elemento da área logada)
    cy.url().should('include', '/area_logada');
  });

  it('Deve publicar um novo animal para adoção com sucesso', () => {
    // Navega até a tela de publicação de animal
    cy.visit('http://localhost:3000/area_logada/disponibilizar_animal');

    // Valida se o formulário está visível antes de interagir
    cy.get('form').should('be.visible');

    // Preenche o formulário
    cy.get('input[name="type"]').should('be.visible').type('Gato', { delay: 100 });
    cy.get('input[name="raca"]').should('be.visible').type('Siamês', { delay: 100 });
    cy.get('input[name="idade"]').should('be.visible').type('2', { delay: 100 });
    cy.get('textarea[name="descricao"]').should('be.visible').type('Gato amigável e brincalhão.', { delay: 100 });

    // Upload de uma foto
    cy.get('input[type="file"]').selectFile('cypress/fixtures/dog.jpg', { force: true });

    // Envia o formulário
    cy.get('button[type="submit"]').should('be.enabled').click();

    // Valida mensagem de sucesso (com timeout maior, se necessário)
    cy.contains(/animal publicado com sucesso/i, { timeout: 10000 }).should('be.visible');

    // Opcional: Valida redirecionamento ou estado pós-publicação
    cy.url().should('include', '/area_logada');
  });
});