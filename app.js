const express = require("express")
const configureMiddleware = require("./src/infraestructure/config/middlewares");
const configureRoutes = require("./src/infraestructure/config/routes");
const startServer = require("./src/infraestructure/config/server");
const {PORT} = require("./src/infraestructure/config/port");
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./src/docs/openapi.yaml');


const app = express();

// Configuración de middleware
configureMiddleware(app);

// Configuración de rutas
configureRoutes(app);

// Iniciar servidor
startServer(app, PORT);

// Agrega la documentación de Swagger a tu aplicación
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
