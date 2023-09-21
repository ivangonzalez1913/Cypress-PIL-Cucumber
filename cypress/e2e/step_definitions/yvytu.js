import { Then } from "@badeball/cypress-cucumber-preprocessor";
import yvytupage from "../../Pages/YVYTU/yvytupage";
Then(`visualiza en el header los botones {string}`, (list) => {
  list = list.split(", ");
  yvytupage.getMenuButtons().each((el, inx) => {
    if (inx != 0) {
      cy.wrap(el).should("have.text", list[inx - 1]);
    }
  });
});
