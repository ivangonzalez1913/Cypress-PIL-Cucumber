import { Then, When } from "@badeball/cypress-cucumber-preprocessor";

const yvytupage = require("../../Pages/YVYTU/yvytupage");
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

When(`el usuario hace scroll hasta {string}`, (scrollToViewTxt) => {
  yvytupage.getSubtitle().contains(scrollToViewTxt).scrollIntoView();
});

When(`el usuario hace click en el boton {string}`, (btnName) => {
  yvytupage.getButton().contains(btnName).click();
});
