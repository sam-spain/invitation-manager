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
  test('Should respond to GET with invitee array 200', () => {
    Invitee.find = jest.fn().mockResolvedValue([samSpainInvitee]);
    return Request(App)
      .get('/api/v1/invitees')
      .expect(200)
      .expect([samSpainInvitee]);
  });
  test('Should respond to failed GET with 500', () => {
    Invitee.find = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .get('/api/v1/invitees')
      .expect({message: 'Failed to retrieve invitees.'})
      .expect(500);
  });
  test('It should respond to GET and ID', () => {
    Invitee.findById = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .get('/api/v1/invitees/1')
      .expect(samSpainInvitee)
      .expect(200);
  });
  test('Should respond to failed GET by ID with 500', () => {
    Invitee.findById = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .get('/api/v1/invitees/1')
      .expect({message: 'Failed to retrieve invitee.'})
      .expect(500);
  });
  test('Should respond to empty GET by ID with 400', () => {
    Invitee.findById = jest.fn().mockResolvedValue(null);
    return Request(App)
    .get('/api/v1/invitees/1')
    .expect({message: 'No invitee with matching ID found.'})
    .expect(400);
  });
  test('It should respond to POST with created invitee and 201', () => {
    Invitee.create = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .post('/api/v1/invitees')
      .expect(201)
      .expect(samSpainInvitee);
  });
  test('Should throw 500 on POST fail', () => {
    Invitee.create = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .post('/api/v1/invitees')
      .expect(500)
      .expect({message: 'Failed to create invitee.'});
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
