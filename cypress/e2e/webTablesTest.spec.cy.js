import webTablesPage from '../pages/webTablesPage';

describe('Web Tables - CRUD Testes', () => {
  beforeEach(() => {
    webTablesPage.acessarMenuWebTables();
  });

  it('Deve criar, editar e deletar um registro', () => {
    const email = 'murilo.galindo@example.com';
  
    webTablesPage.criarRegistro();
    webTablesPage.editarRegistro();
    webTablesPage.deletarRegistroPorEmail(email);
    webTablesPage.validarRegistroDeletado();
  });
});