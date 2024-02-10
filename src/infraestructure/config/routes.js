// routes.js
const supplierRoutes = require('../../routes/supplierApi');

const configureRoutes = (app) => {
  app.use('/api', supplierRoutes);
  // Agrega otras rutas según sea necesario
};

module.exports = configureRoutes;