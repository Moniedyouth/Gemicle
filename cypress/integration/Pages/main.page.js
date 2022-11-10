class Main_page {

  openSite() {
    cy.visit('https://www.redmine.org/');
  }

  get loginButton() {
    return cy.get('[href="/account/register"]');
  }
  get header2Registration() {
    return cy.xpath('//*[@id="content"]/h2');
  }
  get multipleProkectsSupport() {
    return cy.get('[href="/projects/redmine/wiki/RedmineProjects"]')
  }
  get downloadButton() {
    return cy.get('.download')
  }
  get repositoryButton() {
    return cy.get('.repository')
  }



  clickLoginButton() {
    this.loginButton.click();
  }
  clickMultipleProkectsSuppor() {
    this.multipleProkectsSupport.click();
  }
  clickDownloadButton() {
    this.downloadButton.click();
  }
  clickRepositoryButton() {
    this.repositoryButton.click();
  }
}
module.exports = new Main_page();