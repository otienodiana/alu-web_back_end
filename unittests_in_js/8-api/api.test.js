const request = require('request');
const { expect } = require('chai');
const app = require('./api'); // Import your server

let server;

describe('API integration test', () => {
  before((done) => {
    server = app.listen(7865, done);
  });

  after((done) => {
    server.close(done);
  });

  const API_URL = 'http://localhost:7865';

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
