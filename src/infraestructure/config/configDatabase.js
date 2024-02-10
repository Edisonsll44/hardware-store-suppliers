const { Sequelize } = require('sequelize');
/**
 * Configuración de Sequelize para la conexión a la base de datos PostgreSQL.
 * @type {Sequelize}
 */
const sequelize = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password:'toor',
    database:'HardwareStore',
    logging: false, // Desactiva los mensajes de registro
});



module.exports = {sequelize}