class Download_page {

    get file() {
        return cy.get(':nth-child(5) > .icon');
    }
    downloadZipFile() {
        cy.window().document().then(function (doc) {
            doc.addEventListener('click', () => {
                setTimeout(function () { doc.location.reload() }, 1000)
            });
            cy.get(':nth-child(5) > .icon').click();
        })
    }
}
module.exports = new Download_page();