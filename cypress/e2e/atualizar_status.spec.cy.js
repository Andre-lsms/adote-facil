/// <reference types="cypress" />

describe('Atualizar status do animal', () => {

  beforeEach(() => {
    // Executa antes de cada teste: visita a página de login
    cy.visit('http://localhost:3000/login');
  });

  it('Deve logar e atualizar o status do primeiro animal', () => {
    // Preenche o email e senha
    cy.get('input[name="email"]').type('teste@example.com');
    cy.get('input[name="password"]').type('12345678');

    // Clica no botão de login
    cy.get('button[type="submit"]').click();

   // Verifica que a página mudou para a área dos animais
    cy.url({ timeout: 10000 }).should('include', '/area_logada/animais_disponiveis');

    
    // Seleciona o primeiro card de animal
    cy.get('.animal-card', { timeout: 10000 }).first().as('primeiroAnimal');

    // Clica no botão "Atualizar status" dentro do card
    cy.get('@primeiroAnimal').contains('Atualizar status').click();

    // Seleciona "Adotado" no dropdown de status
    cy.get('select').select('Adotado');

    // Clica no botão de envio
    cy.get("button[type='submit']").click();

    // Verifica a mensagem de sucesso
    cy.contains('Status atualizado com sucesso', { timeout: 10000 }).should('be.visible');
  });

});


