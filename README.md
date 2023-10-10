# Cypress-PIL-Cucumber

Test utilizando cucumber

# Dependencias

Para la realizacion de los test se instalaron las siguientes dependencias:

- @badeball/cypress-cucumber-preprocessor@18.0.6
- @bahmutov/cypress-esbuild-preprocessor@2.2.0
- cypress@13.2.0

# Reporte

Para el reporte se utilizo cucumber-report.html. Se genera utilizando el comando "cypress:run:todos".

# Test Eden

El test sobre la verificacion del precio utilizando servicio tiene validez hasta el 13/10

# Test Copa Argentina

Los test realizados en la pagina de copa argentina tienen un viewport configurado ya que los valores default de cypress no muestran la pagina como version de escritorio (que es como se pensaron y realizaron los test)
