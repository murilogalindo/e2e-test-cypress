class WindowsPage {
  acessarMenuPrincipal() {
    cy.contains('Alerts, Frame & Windows').click({ force: true });
  }

  acessarSubmenuBrowserWindows() {
    cy.contains('li span', 'Browser Windows').click({ force: true });
  }

  clicarBotaoNovaJanela() {
    // Stub para interceptar a abertura da nova janela
    cy.window().then((win) => {
      cy.stub(win, 'open').as('windowOpen');
    });

    cy.get('#windowButton').click();
  }

  validarMensagemNovaJanela() {
    // Simula acesso direto ao conteúdo da nova janela
    cy.visit('https://demoqa.com/sample');

    cy.get('h1').should('have.text', 'This is a sample page');
  }
  voltarParaPaginaAnterior() {
    cy.visit('https://demoqa.com/browser-windows');
  }
}


module.exports = new WindowsPage();
