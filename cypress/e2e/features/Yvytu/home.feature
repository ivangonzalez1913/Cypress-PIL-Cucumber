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
        When el usuario scrollea hasta "Conocé una historia mágica."
        Then el boton "Ir arriba" se visualiza
        When el usuario hace click en el boton "Ir arriba"
        Then visualiza en el header los botones "LA RESERVA, CABAÑAS, COMO LLEGAR, CONTACTO, DONÁ"
        And el boton "Ir arriba" no se visualiza
    Scenario: Verificar cabañas
        Given que un usuario esta en la pagina "Yvytu"
        When el usuario scrollea hasta "Nuestras cabañas"
        Then se verifica que la cabaña "1" llamada "Yaguareté" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi, Aire acondicionado"
        And se verifica que la cabaña "2" llamada "Arasari" posee las siguientes caracteristicas "Para 4 personas, 2 habitaciones, Baño con ducha, Ropa de cama, Wi-fi"