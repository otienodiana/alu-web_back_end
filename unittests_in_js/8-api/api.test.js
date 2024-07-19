const request = require('request');
const { expect } = require('chai');
const server = require('../app');

describe('API integration test', () => {
  const API_URL = 'http://localhost:7865';

  after(() => {
    server.close();
  });

  it('GET / returns correct response', (done) => {
    request.get(`${API_URL}/`, (_err, res, body) => {
      expect(res.statusCode).to.be.equal(200);
      expect(body).to.be.equal('Welcome to the payment system');
      done();
    });
  });
});
