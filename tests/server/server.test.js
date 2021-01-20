import Request from 'supertest';
import App from '../../server/app.js';
import Invitee from '../../server/models/Invitee';

describe('Invitee API endpoint', () => {
  const samSpainInvitee = {
    enteredName: 'Sam Spain',
    inviteStatus: 'Sent',
    invitedToCeremony: 'false',
    invitedToReception: 'false',
    invitedToExtraEvent: 'true',
  };
  test('Respond to GET with invitee array and 200', () => {
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
  test('Respond to GET by ID with invitee and 200', () => {
    Invitee.findById = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .get('/api/v1/invitees/1')
      .expect(samSpainInvitee)
      .expect(200);
  });
  test('Respond to failed GET by ID with 500', () => {
    Invitee.findById = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .get('/api/v1/invitees/1')
      .expect({message: 'Failed to retrieve invitee.'})
      .expect(500);
  });
  test('Respond to empty GET by ID with 404', () => {
    Invitee.findById = jest.fn().mockResolvedValue(null);
    return Request(App)
      .get('/api/v1/invitees/1')
      .expect({message: 'No invitee with matching ID found.'})
      .expect(404);
  });
  test('Respond to POST with created invitee and 201', () => {
    Invitee.create = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .post('/api/v1/invitees')
      .expect(201)
      .expect(samSpainInvitee);
  });
  test('Respond to failed POST with 500', () => {
    Invitee.create = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .post('/api/v1/invitees')
      .expect(500)
      .expect({message: 'Failed to create invitee.'});
  });

  test('Respond to PUT with ID with updated invitee and 200', () => {
    Invitee.findByIdAndUpdate = jest.fn().mockResolvedValue(samSpainInvitee);
    const updatedInvitee = {
      updatedInvitee: samSpainInvitee,
    };
    return Request(App)
      .put('/api/v1/invitees/1')
      .expect(updatedInvitee)
      .expect(200);
  });

  test('Respond to PUT with ID with 404 when failed to find', () => {
    Invitee.findByIdAndUpdate = jest.fn().mockResolvedValue(null);
    return Request(App)
      .put('/api/v1/invitees/1')
      .expect(404)
      .expect({message: 'Failed to find invitee to update.'});
  });

  test('Respond to PUT with ID with 500 when failed', () => {
    Invitee.findByIdAndUpdate = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .put('/api/v1/invitees/1')
      .expect(500)
      .expect({message: 'Failed to update invitee.'});
  });

  test('Respond to DELETE with ID with empty and 204', () => {
    Invitee.findByIdAndDelete = jest.fn().mockResolvedValue(samSpainInvitee);
    return Request(App)
      .delete('/api/v1/invitees/1')
      .expect(204)
      .expect({});
  });
  test('Respond to DELETE where invitee could not be found with 404', () => {
    Invitee.findByIdAndDelete = jest.fn().mockResolvedValue(null);
    return Request(App)
      .delete('/api/v1/invitees/1')
      .expect(404)
      .expect({message: 'Failed to find invitee to delete.'});
  });
  test('Respond to DELETE that failed with 500', () => {
    Invitee.findByIdAndDelete = jest.fn().mockImplementation(() => {
      throw new Error();
    });
    return Request(App)
      .delete('/api/v1/invitees/1')
      .expect(500)
      .expect({message: 'Failed to delete invitee.'});
  });
});
