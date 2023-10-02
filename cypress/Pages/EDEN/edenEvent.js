class EdenEvent {
  getEventTitle() {
    return cy.get(".fechas-funciones span").first();
  }
  getEventMonth() {
    return cy.get("#calendarMonth");
  }
  getEventDay() {
    return cy.get("#calendarDay");
  }
  getEventTime() {
    return cy.get("#calendarTime");
  }
}
module.exports = new EdenEvent();
