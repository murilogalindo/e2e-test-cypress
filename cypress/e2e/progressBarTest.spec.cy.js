const progressBarPage = require('../pages/progressBarPage');

describe('Progress Bar - Widget DemoQA', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('Must be start, stop before 25% and validate, after complete should be restarted', () => {
    progressBarPage.acessarMenuWidgets();
    progressBarPage.acessarSubmenuProgressBar();

    // Starts and stops before 25%
    progressBarPage.clicarStart();
    progressBarPage.esperarEAbrirAntesDos25();

  
    // Start again and let it reach 100%, then reset
    progressBarPage.esperar100EPararEResetar();

    // Assert: Checks if the bar has been reset after reaching 100%
    cy.get('#startStopButton').should('be.visible');
      


  });
});