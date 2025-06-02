Project: Cypress Automation - Serverest

This project performs automated tests on the Demoqa platform using Cypress with the Page Object Model, integration with Mochawesome for reporting, and following best automation practices.
🚀 Technologies Used

    Cypress — E2E Testing Framework

    Mochawesome — Report generation (HTML and JSON)

    JavaScript — Language for scripting tests

    Node.js — Execution environment

    Page Object Model (POM) — Test organization pattern

📂 Folder Structure

cypress/
├── e2e/
│   ├── formTest.spec.cy.js             #  Practice Form test
│   ├── progressBarTest.spec.cy.js      #  Progress Bar test
│   ├── sortableTest.spec.cy.js         #  Sortable test 
│   └── webTablesTest.spec.cy.js        #  Web Tables test
|   └── windowTest.spec.cy.js           #  Browser Windows test
├── pages/
│   ├── formPage.js                     # Practice Form page
│   ├── progressBarPage.js              # Progress Bar page
│   ├── sortablePage.js                 # Sortable test page
│   └── webTablesPage.js                # Web Tables test page
|   └── windowPage.js                   # Browser Windows page
├── fixtures/
│   └── example.json                 
└── reports/                            # Generated test reports

⚙️ Installation

    Clone the repository:

git clone git@github.com:murilogalindo/e2e-test-cypress.git

Navigate into the project directory:

cd e2e-test-cypress


Install the dependencies:

    npm install

🛠 Configuration

The project is already configured in the file cypress.config.js:

import { defineConfig } from "cypress";

export default defineConfig({
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: 'https://demoqa.com',
    testIsolation: false,
    chromeWebSecurity: false,
    video: false,
    specPattern: 'cypress/**/*.cy.{js,jsx,ts,tsx}', // <- aqui!
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
      // você pode usar eventos aqui, se necessário
    }
  }
});


▶️ Running the Tests

    To open Cypress in interactive mode:

npx cypress open

To run all tests in headless mode and generate a report:

    npx cypress run


▶️ Running the Tests using NTl
    ntl 

Node Task List
? Select a task to run: (Use arrow keys)
❯ cypress:web 
  cypress:headless 

📊 Report Generation

After running the command:

npx cypress run

Test reports will be generated inside:

cypress/reports/

You can open the generated .html file to view the detailed graphical test results.
✅ Features Tested

    PracticeForm

    Browser Windows

    Product registration

    Web Tables

    Progress Bar

    Sortable

🔮 Future Improvements

    Continuous Integration (CI/CD) with GitHub Actions and Jenkins

    Expand negative test scenarios

👨‍💻 Author

Developed by Murilo Galindo 🚀

    LinkedIn: https://www.linkedin.com/in/murilogalindo/

    GitHub: https://github.com/murilogalindo
