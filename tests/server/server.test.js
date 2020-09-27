const Request = require('supertest');
const App = require('../../server/app.js');

describe('Test the root path', () => {
  test('It should response the GET method', () => {
    return Request(App)
        .get('/api/v1/invitees')
        .expect(200);
  });
});
