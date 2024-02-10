// test/app.test.js

const request  = require(supertest);
const app = require("../../../app");
const assert = require("chai").assert;

describe('Pruebas de conexión a la base de datos', () => {
    it('debería sincronizar la base de datos sin errores', (done) => {
      request(apcleap)
        .get('/') // Ajusta la ruta según tus necesidades
        .expect(200)
        .end((err) => {
          if (err) return done(err);
          done();
        });
    });
  });
