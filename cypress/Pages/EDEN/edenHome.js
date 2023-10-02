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
  getVerBtn() {
    return cy.get(".contenido-todos-ver-funcion");
  }
  getEvenPrice() {
    return cy.get('[class="col-12 mb-1"]');
  }
  getEventUbi() {
    return cy.get('tbody [class="col-12"]');
  }
}
module.exports = new EdenHome();
