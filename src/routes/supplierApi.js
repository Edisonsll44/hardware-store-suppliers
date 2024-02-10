const express = require('express');
const router = express.Router();
const supplierController = require("../controllers/apis/SupplierController");


// Rutas CRUD para los proveedores bajo el módulo 'v1'

// Obtener todos los proveedores
router.get('/v1/suppliers', supplierController.getSuppliers);

// Obtener un proveedor por su ID
router.get('/v1/suppliers/:id', supplierController.getSupplierById);

// Crear un nuevo proveedor
router.post('/v1/suppliers', supplierController.createSupplier);

// Actualizar un proveedor por su ID
router.put('/v1/suppliers/:id', supplierController.updateSupplier);

// Eliminar un proveedor por su ID
router.delete('/v1/suppliers/:id', supplierController.deleteSupplier);

module.exports = router;