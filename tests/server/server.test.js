import Request from 'supertest';
import App from '../../server/app.js';
import Invitee from '../../server/models/Invitee';

describe('Test Invitee API endpoint', () => {
  const samSpainInvitee = {
    enteredName: 'Sam Spain',
    inviteStatus: 'Sent',
    invitedToCeremony: 'false',
    invitedToReception: 'false',
    invitedToExtraEvent: 'true',
  };
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
    Invitee.create = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .post('/api/v1/invitees')
      .expect(201)
      .expect(samSpainInvitee);
  });
  test('Should throw 400 on POST fail', () => {
    Invitee.create = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .post('/api/v1/invitees')
      .expect(400)
      .expect({message: 'Failed to create.'});
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
