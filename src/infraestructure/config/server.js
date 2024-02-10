// server.js
const { sequelize } = require('./configDatabase');

const startServer = (app, port) => {
  sequelize.authenticate().then(() => {
    console.log('Conexión a la base de datos establecida correctamente');
    sequelize.sync().then(() => {
      startServer(app, port);
    });
  }).catch((error) => {
    console.error('Error al conectar a la base de datos:', error);
  });
};




module.exports = startServer;