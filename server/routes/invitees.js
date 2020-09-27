const Express = require('express');
const {
  getInvitees,
  getInvitee,
  createInvitee,
  updateInvitee,
  deleteInvitee,
} = require('../controllers/invitees.js');
const Router = Express.Router();
Router.route('/').get(getInvitees).post(createInvitee);
Router.route('/:id').get(getInvitee).put(updateInvitee).delete(deleteInvitee);
module.exports = Router;
