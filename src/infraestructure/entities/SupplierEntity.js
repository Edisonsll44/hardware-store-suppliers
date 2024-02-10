// infrastructure/entities/SupplierEntity.js

const { DataTypes } = require('sequelize');
const {sequelize} = require ("../config/configDatabase");



const SupplierEntity = sequelize.define('Supplier', {
    supplier_id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    supplier_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identification_type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address: {
      type: DataTypes.STRING,
    },
    email: {
      type: DataTypes.STRING,
    },
    primary_phone: {
      type: DataTypes.STRING,
    },
    secondary_phone: {
      type: DataTypes.STRING,
    },
    status: {
      type: DataTypes.BOOLEAN,
      defaultValue: true,
    },
    created_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: false,
    },
    created_by: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    modified_at: {
      type: DataTypes.DATE,
    },
    modified_by: {
      type: DataTypes.STRING,
    },
    timestamps: false, // Desactiva la generación automática de timestamps
  });
  
  module.exports = SupplierEntity;