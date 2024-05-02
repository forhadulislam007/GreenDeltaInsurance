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
    - **reports/html**: HTML report on my automation. 
    Please open the index.html file in any browser to check the report details. Also check the screenshots too for reference.
    - **screenshots/**: Screenshots while executing the test. 
    Please remove the current screenshots, before running any test. Sometimes cypress failed to remove them automatically.
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

- **mandatoryfields.cy.js**
    - After visiting the site cypress will directly click on the Get Qoute button without submitting any required informations.

- **numericvalue.cy.js**
    - It will insert alphabets in numeric fields (e.g. Sum Insured field) and click on the Get Qoute button to check the validation for numeric inputs.
        We can use special characters too, to perform this check. 
        Just change the sum (under the otherinfos) in the sitedata.json file.

- **carqoute.cy.js**
    - Complete data submission process to get qoutes for a Car.
    - Please follow the comments (Started with //) to understand clearly. 
    I also used separate lines for types that have multiple values (e.g. Vehicle Type: Private/Commercial, also for the CC/Ton/Seat).
    To change the type just comment the current one, and remove the comment from the one you wished to use.

- **termsofuse.cy.js**
    - This spec will visit the website, clicks the Terms of Use and then it will automatically get back to the previous page.

- **sitedata.json**
    - This file contains all the data and datasets that I used for this automation. All the data are also categorised as per types.
    We can update any one of them to modify or change the current data while running the automation test.

## To check existing/create new extent report for this project:

- **Existing report**
    - Open the index.html file in any browser and check report details.
    - Here we have reference screenshots too.

- **Prepare new report**
    - First go to project directory.
    - run npm run html-report from terminal. It will check all the specs one by one and then share the report in the report folder.
    - We can modify the specs quantity (e.g. run test for all specs together, or for any random spec) from the package.json configuration.

                Thank You!