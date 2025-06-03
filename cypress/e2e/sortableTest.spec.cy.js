import sortablePage from '../pages/sortablePage';

describe('Drag and drop sorting test', () => {
  it('You should move "Six" to the end of the list', () => {
    sortablePage.acessarSite();
    sortablePage.acessarMenuInteractions();
    sortablePage.acessarSubmenuSortable();
    sortablePage.ordenarElementos();
    sortablePage.validarOrdemEsperada();

     // Validates that "Six" is now the last element in the list
     cy.get('.vertical-list-container > div')
     .last()
     .should('contain.text', 'Six');
  });
});