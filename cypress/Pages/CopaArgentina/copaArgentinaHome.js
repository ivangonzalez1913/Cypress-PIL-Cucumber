class CopaArgentinaHome {
  getNavbarButtons() {
    return cy.get(".zone-header-4>ul.menu>li>a");
  }
}
module.exports = new CopaArgentinaHome();
