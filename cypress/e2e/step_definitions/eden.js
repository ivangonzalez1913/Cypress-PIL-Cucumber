import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/EDEN/edenHome.js");
const edenEvent = require("../../Pages/EDEN/edenEvent.js");
Then(`visualizan en el header los botones {string}`, (list) => {
  list = list.split(", ");
  cy.log(list);
  edenHome.getNavBar().each((el, inx) => {
    cy.wrap(el).contains(list[inx]);
  });
});

When(`escribe {string} en el buscador`, (eventName) => {
  edenHome.getSearchInput().type(eventName);
});

When(`hace click en la sugerencia {string}`, (suggestionName) => {
  edenHome.getSearchSuggestions().first().contains(suggestionName).click();
});

Then(`se verifica que el nombre es {string}`, (eventTitle) => {
  edenEvent.getEventTitle().should("have.text", eventTitle);
});
Then(
  `la fecha es {string} de {string} a las {string}`,
  (eventDay, eventMonth, eventTime) => {
    edenEvent.getEventMonth().should("have.text", eventMonth);
    edenEvent
      .getEventDay()
      .invoke("text")
      .then((text) => {
        const textSinSaltos = text.trim();
        expect(textSinSaltos).to.equal(eventDay);
      });
    edenEvent
      .getEventTime()
      .invoke("text")
      .then((text) => {
        const textSinSaltos = text.trim();
        expect(textSinSaltos).to.equal(eventTime);
      });
  }
);
