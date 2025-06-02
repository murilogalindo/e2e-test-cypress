const windowsPage = require('../pages/windowsPage');

describe('Teste de nova janela em demoqa.com', () => {
  it('Deve abrir uma nova janela e validar a mensagem', () => {
    cy.visit('https://demoqa.com/');

    windowsPage.acessarMenuPrincipal();
    windowsPage.acessarSubmenuBrowserWindows();
    windowsPage.clicarBotaoNovaJanela();

    // Navega diretamente para a nova janela, já que Cypress não suporta múltiplas janelas reais
    windowsPage.validarMensagemNovaJanela();

     // Valida que voltou
     cy.visit('https://demoqa.com/sample');
     cy.get('h1').should('contain', 'This is a sample page');
     
     // Simula "fechar a janela" voltando para a anterior:
     cy.visit('https://demoqa.com/browser-windows'); 
  });
});
