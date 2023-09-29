class Eden {
  getNavBar() {
    return cy.get("#navbar a");
  }
}
module.exports = new Eden();
