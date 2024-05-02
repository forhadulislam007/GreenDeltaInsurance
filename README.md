# GreenDeltaInsurance
SQA automation assessment for Green Delta Insurance.


1. **Clone Repository:**
   Clone the repository in your local system.
   Now, open the directory/project in any of your editor (e.g. VS Code, Aqua, etc.)


2. **Installation:**
  Install cypress and it's dependencies for the project.
  Few sample commands:
  npm install cypress --save-dev
  npm i cypress-real-events
  npm i cypress-file-upload --save-dev

3. **Run Tests:**
    Start cypress:
    npx cypress open

    Choose E2E and any browser (e.g. Chrome, Firefox, Edge, Electron, etc.)

    Now the webdriver will be open with the specs, that we will use for running the test.

## Folder Structure

- **cypress/**
    -**e2e/**: Files containing end-to-end test scripts.
    - **fixtures/**: Fixture files (e.g., test data, image, pdf, etc.)
    - **screenshots/**: Screenshots while executing the test.
    - **support/**: Custom commands and utility functions
    - **cypress.config.js**: Cypress configuration file

## Manual on how to execute the test:
We will run the files in e2e folder. There are different types of specs (The file that contains the e2e test scripts is called as spec) that contains different custom commands as per the requirements.

Let's go through one by one.

- **sitevisit.cy.js**
    - This one is a basic specs, that will only visit the site from the url.

- **searchvehicle.cy.js**
    - As per the requirement mentioned in the assessment, the user will search different vehicles after visiting the site.
    There are multiple vehicles, and I use few of them. 
    Please remove the '//' before the vehicle types to use it. (e.g. In current state, the spec will search the Motor Cycle, but if you want's to search Car, then add '//' before the motorcycle and remove the '//' from the car.)

-**mandatoryfields.cy.js**
    - After visiting the site cypress will directly click on the Get Qoute button without submitting any required informations.

-**numericvalue.cy.js**
    - It will insert alphabets in numeric fields (e.g. Sum Insured field) and click on the Get Qoute button to check the validation for numeric inputs.
        We can use special characters too, to perform this check. 
        Just change the sum (under the otherinfos) in the sitedata.json file.


