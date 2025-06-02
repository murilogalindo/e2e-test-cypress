// IGNORA ERROS DE JAVASCRIPT DO SITE
Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

// IMPORTS OBRIGATÓRIOS NO TOPO
import '@4tw/cypress-drag-drop';
import './commands';

// HOOK GLOBAL DE VISITA E LIMPEZA
beforeEach(() => {
  cy.visit(Cypress.config('baseUrl'));

  cy.get('iframe').then($iframes => {
    $iframes.remove();
  });
});
