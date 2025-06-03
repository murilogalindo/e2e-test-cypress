import webTablesPage from '../pages/webTablesPage';

describe('Web Tables - CRUD Testes', () => {
  beforeEach(() => {
    webTablesPage.acessarMenuWebTables();
  });

  it('Must create, edit and delete a record', () => {
    const email = 'murilo.galindo@example.com';
  
    webTablesPage.criarRegistro();
    webTablesPage.editarRegistro();
    webTablesPage.deletarRegistroPorEmail(email);
    webTablesPage.validarRegistroDeletado();
  });
});