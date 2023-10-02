Feature: Home Eden
   
    Scenario: Verificar navbar
        Given que un usuario esta en la pagina "Eden"
         Then visualizan en el header los botones " HOME, TODOS, AGENDA DEL FINDE, RECITALES, TEATROS, CUARTETOS, FESTIVALES, SALAS"
    Scenario: Verificar funcionalidad del buscador
        Given que un usuario esta en la pagina "Eden"
        When escribe "Halloween" en el buscador
        And hace click en la sugerencia "Creepy Halloween/La Mona Jimenez"
        Then se verifica que el nombre es "Creepy Halloween/ La Mona Jimenez "
        And la fecha es "27" de "octubre" a las "22:00 Hs"