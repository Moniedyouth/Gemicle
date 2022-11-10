class Roadmap_page {

    get footerText() {
        return cy.get('.bgr');
    }
    get checkboxes() {
        return cy.xpath('*//input[@name="tracker_ids[]"]');
    }
    clickRoadmapBtn() {
        cy.get('.roadmap')
            .click();
    }
    uncheckCheckboxes() {
        return cy.xpath('*//input[@name="tracker_ids[]"]')
            .uncheck();
    }
    get_element_xpath(locator) {
        return cy.xpath(locator)
    }
    get_element(locator) {
        return cy.get(locator)
    }
    scrollIntoViewFooterText() {
        return this.footerText.scrollIntoView()
    }

}
module.exports = new Roadmap_page();