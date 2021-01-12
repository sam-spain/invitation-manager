const Request = require('supertest');
const App = require('../../server/app.js');

describe('Test Invitee API endpoint', () => {
  test('It should respond to GET', (done) => {
    return Request(App)
        .get('/api/v1/invitees')
        .expect(200)
        .end(done);
  });
  test('It should respond to GET and ID', (done) => {
    return Request(App)
        .get('/api/v1/invitees/1')
        .expect(200)
        .end(done);
  });
  test('It should respond to POST', (done) => {
    return Request(App)
        .post('/api/v1/invitees')
        .expect(200)
        .end(done);
  });
  test('It should respond to PUT and ID', (done) => {
    return Request(App)
        .put('/api/v1/invitees/1')
        .expect(200)
        .end(done);
  });
  test('It should respond the DELETE and ID', (done) => {
    return Request(App)
        .delete('/api/v1/invitees/1')
        .expect(200)
        .end(done);
  });
});
