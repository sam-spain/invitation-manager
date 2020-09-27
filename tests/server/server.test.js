const Request = require('supertest');
const App = require('../../server/app.js');

describe('Test Invitee API endpoint', () => {
  test('It should respond to GET', () => {
    return Request(App)
        .get('/api/v1/invitees')
        .expect(200);
  });
  test('It should respond to GET and ID', () => {
    return Request(App)
        .get('/api/v1/invitees/1')
        .expect(200);
  });
  test('It should respond to POST', () => {
    return Request(App)
        .post('/api/v1/invitees')
        .expect(200);
  });
  test('It should respond to PUT and ID', () => {
    return Request(App)
        .put('/api/v1/invitees/1')
        .expect(200);
  });
  test('It should respond the DELETE and ID', () => {
    return Request(App)
        .delete('/api/v1/invitees/1')
        .expect(200);
  });
});
