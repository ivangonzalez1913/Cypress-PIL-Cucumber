import { Given } from "@badeball/cypress-cucumber-preprocessor";

Given(`que un usuario esta en la pagina {string}`, (urlName) => {
  if ((urlName = "Yvytu")) {
    cy.visit("https://vientosdelaselva.com.ar/");
  }
});
