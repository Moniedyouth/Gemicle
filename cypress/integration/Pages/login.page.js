
class Login_page {

    get userInput() {
        return cy.get('[id="user_login"]');
    }
    get confirmationInput() {
        return cy.get('[id="user_password_confirmation"]');
    }
    get passwordInput() {
        return cy.get('[id="user_password"]');
    }
    get firstnameInput() {
        return cy.get('[id="user_firstname"]');
    }
    get lastnameInput() {
        return cy.get('[id="user_lastname"]');
    }
    get emailInput() {
        return cy.get('[id="user_mail"]');
    }
    get commitBtn() {
        return cy.get('[name="commit"]');
    }
    get flashNotice() {
        return cy.get('.flash.notice');
    }
    get errorExplanation() {
        return cy.xpath('//div[@id="errorExplanation"]//li');
    }
    get image() {
        return cy.get('[src="/attachments/download/3373/project_list.png"]');
    }


    typeIntoUserInput(user) {
        this.userInput.click().
            type(user);

    }
    typeIntoPasswordInput(password) {
        this.passwordInput.click()
            .type(password)
    }
    typeIntoConfirmationInput(password) {
        this.confirmationInput.click()
            .type(password)
    }
    typeIntoFirstnameInput(firstname) {
        this.firstnameInput.click()
            .type(firstname)
    }
    typeIntoLastnameInput(lastname) {
        this.lastnameInput.click()
            .type(lastname)
    }
    typeIntoEmailInput(email) {
        this.emailInput.click()
            .type(email)
    }
    clickCommitBtn() {
        this.commitBtn.click()
    }

    generateRandomEmail() {
        var strValues = "abcdefg12345";
        var strEmail = "";
        var strTmp;
        for (var i = 0; i < 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@";
        for (var j = 0; j < 8; j++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strEmail = strEmail + ".com"
        return strEmail;
    }

    // source: https://stackoverflow.com/a/1349426
    generateRandomString(length) {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() *
                charactersLength));
        }
        return result;
    }
}
module.exports = new Login_page();