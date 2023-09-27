Feature: Home Yvytu
    Scenario: Se visualiza el menu superior
        Given que un usuario esta en la pagina "Yvytu"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
    Scenario: Verificar imagenes del banner principal
        Given que un usuario esta en la pagina "Yvytu"
        Then se visualizan las imagenes "01, 02, 03, 04" en el banner
    Scenario: Verificar comportamiento del boton Ir Arriba
        Given que un usuario esta en la pagina "Yvytu"
        Then el boton "Ir arriba" no se visualiza
        When el usuario hace scroll hasta "Conocé una historia mágica."
        Then el boton "Ir arriba" se visualiza
        When el usuario hace click en el boton "Ir arriba"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
        And el boton "Ir arriba" no se visualiza