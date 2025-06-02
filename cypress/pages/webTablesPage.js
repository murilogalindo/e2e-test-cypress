class WebTablesPage {
  acessarMenuWebTables() {
    cy.visit('/');
    cy.contains('Elements').click();
    cy.contains('Web Tables').click();
  }

  criarRegistro() {
    cy.get('#addNewRecordButton').click();
    cy.get('#firstName').type('Murilo');
    cy.get('#lastName').type('Galindo');
    cy.get('#userEmail').type('murilo.galindo@example.com');
    cy.get('#age').type('38');
    cy.get('#salary').type('13000');
    cy.get('#department').type('QA');
    cy.get('#submit').click();
  }

  editarRegistro() {
    cy.get('.action-buttons [title="Edit"]').first().click();
    cy.get('#firstName').clear().type('Murilo Almeida QA');
    cy.get('#age').type('39');
    cy.get('#submit').click();
  }

  deletarRegistroPorEmail(email) {
    cy.get('div.rt-tr-group').each(($row) => {
      if ($row.text().includes(email)) {
        cy.wrap($row).within(() => {
          cy.get('[title="Delete"]').click();
        });
      }
    });
  }

  validarRegistroDeletado() {
    cy.get(':nth-child(4) > .rt-tr > :nth-child(1)').should('not.contain', 'Murilo');
  }
}

module.exports = new WebTablesPage();
