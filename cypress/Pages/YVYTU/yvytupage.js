class Yvytu {
  getMenuButtons() {
    return cy.get("#menu-nav a");
  }
}

module.exports = new Yvytu();
