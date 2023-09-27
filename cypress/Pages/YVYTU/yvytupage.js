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
  getButton() {
    return cy.get("#btn-scroll-top");
  }
  getSubtitle() {
    return cy.get("#reserva .text-2xl");
  }
}

module.exports = new Yvytu();
