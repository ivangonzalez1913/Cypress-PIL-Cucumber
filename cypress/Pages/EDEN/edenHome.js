class EdenHome {
  getNavBar() {
    return cy.get("#navbar a");
  }
  getSearchInput() {
    return cy.get("#espectaculoList");
  }
  getSearchSuggestions() {
    return cy.get('ul.ui-autocomplete [id^="ui-id-"]');
  }
}
module.exports = new EdenHome();
