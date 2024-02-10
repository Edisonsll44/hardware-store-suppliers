// test/setup.js
const {Sequelize} = require ("sequelize");

// Configuración de Sequelize para pruebas
const sequelize = new Sequelize({
    dialect:"postgres",
    storage:":memory:"
});

// Conectar a la base de datos antes de que comiencen las pruebas
before(async () => {
    try {
        sequelize.authenticate();
        console.log('Conexión a la base de datos establecida correctamente.');
    } catch (error) {
      console.error('Error al conectar a la base de datos:', error);
      process.exit(1); // Detener las pruebas si no se puede conectar
    }
});

// Cerrar la conexión a la base de datos después de que terminan las pruebas
after(async () => {
    await sequelize.close();
    console.log('Conexión a la base de datos cerrada.');
  });