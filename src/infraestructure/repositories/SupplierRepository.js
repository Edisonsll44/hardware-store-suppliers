const SupplierEntity = require("../entities/SupplierEntity");
const GenericRepository = require("./generic/genericRepository");

class SupplierRepository extends GenericRepository {
    constructor(){
        super(SupplierEntity);
    }  
    
    async getAllSuppliers() {
        return this.getAll();
      }
    
      async getSupplierById(id) {
        return this.getById(id);
      }
    
      async createSupplier(supplierDTO) {
        return this.create(supplierDTO);
      }
    
      async updateSupplier(id, supplierDTO) {
        return this.update(id, supplierDTO);
      }
    
      async deleteSupplier(id) {
        return this.delete(id);
      }

    
}

module.exports = new SupplierRepository();
