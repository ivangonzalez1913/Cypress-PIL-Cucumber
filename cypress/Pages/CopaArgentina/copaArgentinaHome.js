class CopaArgentinaHome {
  getNavbarButtons() {
    return cy.get(".zone-header-4>ul.menu>li>a");
  }
  getGenericButton() {
    return cy.get("ul.menu>li>a");
  }
  getGenericImg() {
    return cy.get("img");
  }
}
module.exports = new CopaArgentinaHome();
