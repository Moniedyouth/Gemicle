class Repository_page {

    get radioButton1() {
        return cy.get('#cb-1');
    }
    get radioButton2() {
        return cy.get('#cb-2');
    } 
}
module.exports = new Repository_page();