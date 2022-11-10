import { Given, When, And, But, Then } from "cypress-cucumber-preprocessor/steps";
const mainPage = require('../Pages/main.page');
const loginPage = require('../Pages/login.page');
const projectsPage = require('../Pages/projects.page');
const roadmapPage = require('../Pages/roadmap.page');
const downloadPage = require('../Pages/download.page');



When('Click on the Login button on main page', ()=>{
    mainPage.clickLoginButton();
});

Then("Name of register form should have text {string}", (headerName) =>{
    mainPage.header2Registration.should('have.text', headerName)
})

// next test

When('Click on the Login button on main page', () => {
    mainPage.clickLoginButton();
});

And('Type into user input {string}', (user)=> {
    user = loginPage.generateRandomString(12);
    loginPage.typeIntoUserInput(user);
});

And('Type into password input {string}', (password)=>{
    password = 'name1295';
    loginPage.typeIntoPasswordInput(password);
});

And('Type into confirmation input {string}', (password) => {
    password = 'name1295';
    loginPage.typeIntoConfirmationInput(password);
});

And('Type into firstname input {string}', (firstname) => {
    firstname = 'Name';
    loginPage.typeIntoFirstnameInput(firstname)
});

And('Type into lastname input {string}', (lastname) => {
    lastname = 'Second Name';
    loginPage.typeIntoLastnameInput(lastname);
});

And('Type into email input {string}', (email) => {
    email = loginPage.generateRandomEmail();
    loginPage.typeIntoEmailInput(email);
});

And('Click on the commit button', () => {
    loginPage.clickCommitBtn();
});

Then('Redirect to the page which has a flash notice with the text {string}', (message) => {
    loginPage.flashNotice.should('contain', message);
})

//next test

When('Click on the Login button on main page', () => {
    mainPage.clickLoginButton();
});

And('Type into user input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoUserInput(space);
});

And('Type into password input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoPasswordInput(space);
});

And('Type into confirmation input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoConfirmationInput(space);
});

And('Type into firstname input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoFirstnameInput(space)
});

And('Type into lastname input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoLastnameInput(space);
});

And('Type into email input just {string}', (space) => {
    space = ' ';
    loginPage.typeIntoEmailInput(space);
});

And('Click on the commit button', () => {
    loginPage.clickCommitBtn();
});

Then('Redirect to the page which has a flash notice with the list of errors', () => {
    loginPage.errorExplanation.should((elements) => {
        const textsFromErrorMassage = elements.map((i, e) => e.textContent);
        const arr = Array.from(textsFromErrorMassage);
        expect(arr).to.deep.eq([
            'Пользователь не может быть пустым',
            'Пользователь имеет неверное значение',
            'Имя не может быть пустым',
            'Фамилия не может быть пустым',
            'Email не может быть пустым',
            'Пароль недостаточной длины (не может быть меньше 4 символа)'
        ]);
    });
})

// next test

When('Click on Multiple projects support link', () => {
    mainPage.clickMultipleProkectsSuppor();
});

Then('On the new page should be a picture', () => {
    projectsPage.image
        .should('be.visible')
        .should('have.attr', 'src')
        .should('include', '.png');
});

// next test

When("Click on the 'Оперативный план' in the main menu", () => {
    roadmapPage.clickRoadmapBtn();
});

Then("'Defect', 'Feature', 'Patch' checkboxes are not disabled and should be checked", () => {
    roadmapPage.checkboxes.not('[disabled]')
        .should('be.checked');
});



// next test

When("Click on the 'Download' button in the main menu", () => {
    mainPage.clickDownloadButton();
});

And("Click on the 'redmine-4.2.4.zip' link", () => {
    downloadPage.downloadZipFile();
})

Then("File with name {string} should be downloaded", (zipName) => {
    cy.verifyDownload(zipName);
})