import { Then, When } from "@badeball/cypress-cucumber-preprocessor";
const copaArgentinaHome = require("../../Pages/CopaArgentina/copaArgentinaHome.js");

When(`configuro un viewport de {int}x{int}`, (width, height) => {
  cy.viewport(width, height);
});

Then(
  `visualiza en el header de Copa Argentina los botones {string}`,
  (list) => {
    list = list.split(", ");
    const buttons = copaArgentinaHome.getNavbarButtons();
    buttons.each((el, inx) => {
      cy.wrap(el)
        .invoke("text")
        .then((text) => {
          const textSinSaltos = text.trim().toLocaleUpperCase();
          expect(textSinSaltos).to.equal(list[inx]);
        });
    });
  }
);
