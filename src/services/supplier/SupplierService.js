const SupplierRepository = require("../../infraestructure/repositories/SupplierRepository");

class SupplierService {
   
    static async getAllSuppliers() {
        try {
            const suppliers = await SupplierRepository.getAllSuppliers();
            return suppliers;
        } catch (error) {
            throw new Error('Error al obtener proveedores desde el caso de uso');

        }
    }

    static async getSupplierById(id) {
        try {
          const supplier = await SupplierRepository.getSupplierById(id);
          return supplier;
        } catch (error) {
          throw new Error('Error al obtener proveedor por ID desde el caso de uso');
        }
      }
    
      static async createSupplier(supplierDTO) {
        try {
          const newSupplier = await SupplierRepository.createSupplier(supplierDTO);
          return newSupplier;
        } catch (error) {
          throw new Error('Error al crear proveedor desde el caso de uso');
        }
      }
    
      static async updateSupplier(id, supplierDTO) {
        try {
          const updatedSupplier = await SupplierRepository.updateSupplier(id, supplierDTO);
          return updatedSupplier;
        } catch (error) {
          throw new Error('Error al actualizar proveedor desde el caso de uso');
        }
      }
    
      static async deleteSupplier(id) {
        try {
          await SupplierRepository.deleteSupplier(id);
        } catch (error) {
          throw new Error('Error al eliminar proveedor desde el caso de uso');
        }
      }
}

module.exports = SupplierService;