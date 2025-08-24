/// <reference types="cypress" />

describe('Atualizar status do animal', () => {

  beforeEach(() => {
    // Faz login via API e salva o token no localStorage
    cy.request('POST', 'http://localhost:8080/login', {
      email: 'usuario_valido@example.com', // substitua por um usuário existente
      senha: 'senha_valida'
    }).then((resp) => {
      // Supondo que a API devolva um token JWT
      window.localStorage.setItem('token', resp.body.token);
    });

    // Visita a página de animais já logado
    cy.visit('http://localhost:3000/meus-animais');
  });

  it('Deve atualizar o status do primeiro animal', () => {
    // Espera o primeiro card aparecer
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


