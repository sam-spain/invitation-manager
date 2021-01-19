const Invitee = require('../models/Invitee');

// @desc        Get all invitees
// @route       GET /api/v1/invitees
// @access      Private
exports.getInvitees = async (req, res, next) => {
  try {
    const invitees = await Invitee.find();
    res.status(200).json(invitees);
  } catch (err) {
    res.status(500).json({message: 'Failed to retrieve invitees.'});
  }
};

// @desc        Get single invitees
// @route       GET /api/v1/invitees/:id
// @access      Private
exports.getInvitee = async (req, res, next) => {
  try {
    const invitee = await Invitee.findById(req.params.id);
    res.status(200).json(invitee);
  } catch (err) {
    res.status(500).json({message: 'Failed to retrieve invitee.'});
  }
};

// @desc        Create invitee
// @route       POST /api/v1/invitees
// @access      Private
exports.createInvitee = async (req, res, next) => {
  try {
    const newInvitee = await Invitee.create(req.body);
    res.status(201).json(newInvitee);
  } catch (err) {
    res.status(500).json({message: 'Failed to create invitee.'});
  }
};

// @desc        Update invitee
// @route       PUT /api/v1/invitees/:id
// @access      Private
exports.updateInvitee = (req, res, next) => {
  res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
};

// @desc        Delete invitee
// @route       DELETE /api/v1/invitees/:id
// @access      Private
exports.deleteInvitee = (req, res, next) => {
  res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
};
