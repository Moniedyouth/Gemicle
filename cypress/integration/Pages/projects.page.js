class Projects_page {

    get image() {
        return cy.get('[src="/attachments/download/3373/project_list.png"]');
    }
    get size() {
        return cy.get(':nth-child(1) > .size');
    } 
}
module.exports = new Projects_page();