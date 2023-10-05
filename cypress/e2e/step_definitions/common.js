import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario esta en la pagina {string}`, (urlName) => {
  const url = Cypress.env(`${urlName.toUpperCase()}_URL`);
  cy.visit(url);
});

When(`el usuario scrollea hasta {string}`, (scrollToViewTxt) => {
  cy.contains(scrollToViewTxt).scrollIntoView();
});

Then(
  `se verifica que el elemento {string} posee los atributos`,
  (locator, table) => {
    table = table.rows();
    table.forEach((el) => {
      const propertyCSS = el[0];
      const propertyCSSvalue = el[1];
      cy.get(locator).should(($el) => {
        const cssCheck = $el.css(propertyCSS);
        expect(cssCheck).to.contain(propertyCSSvalue);
      });
    });
  }
);
