// DTOs/SupplierDTO.js

class SupplierDTO {
    constructor(supplier_id, supplier_name, identification_type, address, email, primary_phone, secondary_phone, status) {
      this.supplier_id = supplier_id;
      this.supplier_name = supplier_name;
      this.identification_type = identification_type;
      this.address = address;
      this.email = email;
      this.primary_phone = primary_phone;
      this.secondary_phone = secondary_phone;
      this.status = status;
    }
  
    static fromEntity(supplierEntity) {
      return new SupplierDTO(
        supplierEntity.supplier_id,
        supplierEntity.supplier_name,
        supplierEntity.identification_type,
        supplierEntity.address,
        supplierEntity.email,
        supplierEntity.primary_phone,
        supplierEntity.secondary_phone,
        supplierEntity.status,
      );
    }
  }
  
  module.exports = SupplierDTO;