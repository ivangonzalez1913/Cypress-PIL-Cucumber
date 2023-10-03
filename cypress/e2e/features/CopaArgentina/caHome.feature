Feature: Copa Argentina Home
    Scenario: Verificar navbar
    Given que un usuario esta en la pagina "CopaArgentina"
    When configuro un viewport de 1280x720
    Then visualiza en el header de Copa Argentina los botones "INICIO, NOTICIAS, LA COPA, SECCIONES, FIXTURE, EQUIPOS, GOLEADORES, MEDIA, SEDES, PRENSA"
