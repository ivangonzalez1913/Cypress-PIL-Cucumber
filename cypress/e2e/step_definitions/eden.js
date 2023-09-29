import { Then } from "@badeball/cypress-cucumber-preprocessor";
const edenPage = require("../../Pages/EDEN/edenPage.js");

Then(`visualizan en el header los botones {string}`, (list) => {
  list = list.split(", ");
  cy.log(list);
  edenPage.getNavBar().each((el, inx) => {
    cy.wrap(el).should("have.text", list[inx]);
  });
});
