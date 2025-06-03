import formPage from '../pages/formPage';

describe('Practice form - DemoQA', () => {
  it('You must complete and submit the form successfully.', () => {
    formPage.visit();
    formPage.goToPracticeForm();
    formPage.fillFormRandomly();
    formPage.submitForm();
    formPage.verifyPopupVisible();
    formPage.closePopup();

  
    // Check if the home page loaded correctly
    cy.url().should('include', 'demoqa.com');
    formPage.goToPracticeForm();

    // Verify if the form is visible
    cy.get('.practice-form-wrapper').should('be.visible');

    formPage.fillFormRandomly();

  });
});