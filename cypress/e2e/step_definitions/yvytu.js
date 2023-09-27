import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

const yvytupage = require("../../Pages/YVYTU/yvytupage");
When(`el usuario scrollea hasta {string}`, (scrollToViewTxt) => {
  cy.contains(scrollToViewTxt).scrollIntoView();
});

When(`el usuario hace click en el boton {string}`, (btnName) => {
  yvytupage.getButton().contains(btnName).click();
});
Then(`visualiza en el header los botones {string}`, (list) => {
  list = list.split(", ");
  yvytupage.getMenuButtons().each((el, inx) => {
    if (inx != 0) {
      cy.wrap(el).should("have.text", list[inx - 1]);
    }
  });
});

Then(`se visualizan las imagenes {string} en el banner`, (imgList) => {
  imgList = imgList.split(", ");
  imgList.forEach((banner, inx) => {
    yvytupage
      .getImgBanner()
      .should(
        "have.class",
        `bg-[url('/public/images/header-gallery/${banner}.png')]`
      );
    yvytupage
      .getImgButton()
      .its("length")
      .then((cantidad) => {
        if (cantidad != inx + 1) {
          yvytupage
            .getImgButton()
            .eq(inx + 1)
            .click();
          cy.wait(1000);
        }
      });
  });
});
Then(`el boton {string} no se visualiza`, (btnName) => {
  yvytupage.getButton().contains(btnName).should("not.be.visible");
});
Then(`el boton {string} se visualiza`, (btnName) => {
  yvytupage.getButton().contains(btnName).should("be.visible");
});

Then(
  `se verifica que la cabaña {string} llamada {string} posee las siguientes caracteristicas {string}`,
  (cabanaNum, cabanaName, cabanaInfo) => {
    cabanaInfo = cabanaInfo.split(", ");
    yvytupage
      .getCabanaTitle()
      .eq(cabanaNum - 1)
      .should("contain.text", `Cabaña ${cabanaName}`);
    yvytupage
      .getCabanaInfo()
      .eq(cabanaNum - 1)
      .find("span")
      .each((el, $inx) => {
        cy.wrap(el).should("contain.text", cabanaInfo[$inx]);
      });
  }
);
