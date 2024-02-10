class GenericRepository {
    constructor(model){
        this.model = model
    }


async create(data){
    return this.model.create(data);
}

async findById(id) {
    return this.model.findByPk(id);
  }

  async getAll() {
    return this.model.findAll();
  }

  async update(id, data) {
    const entity = await this.findById(id);
    if (entity) {
      return entity.update(data);
    }
    return null;
  }

  async remove(id) {
    const entity = await this.findById(id);
    if (entity) {
      return entity.destroy();
    }
    return null;
  }

  async any(filter = {}) {
    const entity = await this.model.findOne({ where: filter });
    return Boolean(entity);
  }

  async count(filter = {}) {
    return this.model.count({ where: filter });
  }
}

module.exports = GenericRepository;