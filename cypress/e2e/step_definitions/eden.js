import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const edenHome = require("../../Pages/EDEN/edenHome.js");
const edenEvent = require("../../Pages/EDEN/edenEvent.js");
When(`escribe {string} en el buscador`, (eventName) => {
  edenHome.getSearchInput().type(eventName);
});

When(`hace click en la sugerencia {string}`, (suggestionName) => {
  edenHome.getSearchSuggestions().first().contains(suggestionName).click();
});
When(`hace click en el boton del header {string}`, (botonHeader) => {
  edenHome.getNavBar().contains(botonHeader).click();
});

Then(`visualizan en el header los botones {string}`, (list) => {
  list = list.split(", ");
  cy.log(list);
  edenHome.getNavBar().each((el, inx) => {
    cy.wrap(el).contains(list[inx]);
  });
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

Then(`hace click en el boton {string} Ver`, (botonVer) => {
  numeroDeBoton = parseFloat(botonVer);
  edenHome
    .getVerBtn()
    .eq(numeroDeBoton - 1)
    .click();
});

Then(
  `el precio que se visualiza tiene el formato correcto validado con el servicio`,
  () => {
    cy.request({
      method: "GET",
      url: "https://edenapi.edenentradas.com.ar/edenventarestapi/api/contenido/funcion/FUNC022306",
    }).then((response) => {
      cy.log(response);
      const prices = response.body.Precios;
      edenHome.getEvenPrice().each((showPrice, inx) => {
        const priceUb = prices[inx];
        cy.log(priceUb);
        const showPrices = `${priceUb.PrecioEntrada} + ${priceUb.ServiceCharge}`;
        cy.log(showPrices);
        edenHome.getEventUbi().eq(inx).should("contain.text", priceUb.Nombre);
        cy.wrap(showPrice).should("contain.text", showPrices);
      });
    });
  }
);
