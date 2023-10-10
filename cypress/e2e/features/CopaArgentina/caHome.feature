Feature: Copa Argentina Home
    Scenario: Verificar navbar
    Given que un usuario esta en la pagina "CopaArgentina"
    When configuro un viewport de 1280x720
    Then visualiza en el header de Copa Argentina los botones "INICIO, NOTICIAS, LA COPA, SECCIONES, FIXTURE, EQUIPOS, GOLEADORES, MEDIA, SEDES, PRENSA"
 
    Scenario: Verificar css navbar
    Given que un usuario esta en la pagina "CopaArgentina"
    When configuro un viewport de 1280x720
    Then se verifica que el elemento "ul.menu>li>a" posee los atributos
        |css-attribute|valor|
        |color|rgb(255, 255, 255) |
        |background-color|rgba(0, 0, 0, 0) |
        |font-family|"News Cycle"|
         |font-size|11px|

    Scenario: Verificar sponsor
    Given que un usuario esta en la pagina "CopaArgentina"
    When el usuario scrollea hasta "Main Sponsor"
    Then se visualiza la imagen '[alt="Media ID-103810"]'