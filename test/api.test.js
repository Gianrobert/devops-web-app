const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('API', () => {
    it('debería retornar mensaje en /api/greet', (done) => {
        chai.request(server)
            .get('/api/greet')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.an('object');
                res.body.should.have.property('message').eql('Hola, bienvenido a la API');
                done();
            });
    });

    it('debería retornar HTML en /', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                res.should.have.status(200);
                res.text.should.include('<!DOCTYPE html>');
                done();
            });
    });
});
