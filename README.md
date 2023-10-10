# Cypress-PIL-Cucumber

Test utilizando cucumber

# Instalacion y configuracion inicial

Una vez bajado el repositorio en su dispositivo en la terminal:

1. npm install
2. npm install cypress

Para la realizacion de los test se instalaron las siguientes dependencias, verificar que esten en el archivo **package.json**:

- @badeball/cypress-cucumber-preprocessor@18.0.6
- @bahmutov/cypress-esbuild-preprocessor@2.2.0
- cypress@13.2.0

# Reporte

Para realizar el reporte se utilizo el reporter basico de cucumber.
Configuracion:

1. Verificar dentro de _cypress-cucumber-preprocessor_ en **package.json** los siguientes valores:

   "html": {
   "enabled": true,
   "output": "reports/cucumber-report.html"
   },

   "messages": {
   "enabled": true,
   "output": "reports/messages.ndjson"
   },

   "json": {
   "enabled": true,
   "output": "reports/log.json"
   }

2. Agregar en **package.json**, para que se corran los test, el _script_:

"cypress:run:todos": "npx cypress run --e2e --browser chrome -e \"tags=not @ignore\" -s cypress/e2e/features/\*_/_.feature"

Una vez ejecutemos el script para que se corran los test se generan:

1. Un archivo _.html_ que muestra visualmente la ejecucion de los test;
2. Un archivo _.json_ que muestra los test corridos en formato json;
3. Un archivo _.ndjson_ que almacena informacion mas detallada de los test.

# Tests

## Eden

El test sobre la verificacion del precio utilizando servicio tiene **validez hasta el 13/10**

## Copa Argentina

Los test realizados en la pagina de copa argentina tienen un **viewport de 1280x720** configurado ya que los valores default de cypress no muestran la pagina como version de escritorio (que es como se pensaron y realizaron los test)
