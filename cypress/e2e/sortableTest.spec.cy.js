import sortablePage from '../pages/sortablePage';

describe('Teste de ordenação com drag and drop', () => {
  it('Deve mover o "Six" para o fim da lista', () => {
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