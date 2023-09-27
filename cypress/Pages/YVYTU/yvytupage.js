class Yvytu {
  getMenuButtons() {
    return cy.get("#menu-nav a");
  }
  getImgBanner() {
    return cy.get(
      `[class^="w-full h-600 bg-[url('/public/images/header-gallery/"][class*="slick-current"]`
    );
  }
  getImgButton() {
    return cy.get("ul").first().find("li button");
  }
}

module.exports = new Yvytu();
