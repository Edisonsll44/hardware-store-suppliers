const SupplierService = require("../../services/supplier/SupplierService");

class SupplierController {

    static async getSuppliers(req, res){
        const filters = req.query; // Obtener filtros de la consulta URL
        try {
            const suppliers = await SupplierService.getAllSuppliers({
                where:filters
            });
            res.json(suppliers);
        } catch (error) {
            console.error('Error al obtener proveedores:', error);
            res.status(500).json({ error: 'Error interno del servidor' });
        }
    };

    static async getSupplierById(req, res) {
        const { id } = req.params;
    
        try {
          const supplier = await SupplierService.getSupplierById(id);
    
          if (supplier) {
            res.json(supplier);
          } else {
            res.status(404).json({ error: 'Proveedor no encontrado' });
          }
        } catch (error) {
          console.error('Error al obtener proveedor por ID:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }

      static async createSupplier(req, res) {
        const supplierDTO = req.body;
    
        try {
          const newSupplier = await SupplierService.createSupplier(supplierDTO);
    
          res.status(201).json(newSupplier);
        } catch (error) {
          console.error('Error al crear proveedor:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }
    
      static async updateSupplier(req, res) {
        const { id } = req.params;
        const supplierDTO = req.body;
    
        try {
          const [updatedRowsCount, updatedSupplier] = await SupplierService.updateSupplier(
            supplierDTO,
            {
              where: { id },
              returning: true,
            }
          );
    
          if (updatedRowsCount === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
          } else {
            res.json(updatedSupplier[0]);
          }
        } catch (error) {
          console.error('Error al actualizar proveedor:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }
    
      static async deleteSupplier(req, res) {
        const { id } = req.params;
    
        try {
          const deletedRowsCount = await SupplierService.deleteSupplier({
            where: { id },
          });
    
          if (deletedRowsCount === 0) {
            res.status(404).json({ error: 'Proveedor no encontrado' });
          } else {
            res.json({ message: 'Proveedor eliminado exitosamente' });
          }
        } catch (error) {
          console.error('Error al eliminar proveedor:', error);
          res.status(500).json({ error: 'Error interno del servidor' });
        }
      }
}
module.exports = SupplierController;
