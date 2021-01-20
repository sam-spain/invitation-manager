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
    if (!invitee)
      res.status(404).json({message: 'No invitee with matching ID found.'});
    else res.status(200).json(invitee);
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
exports.updateInvitee = async (req, res, next) => {
  try {
    const updatedInvitee = await Invitee.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
        runValidators: true,
      },
    );

    if (!updatedInvitee)
      return res
        .status(404)
        .json({message: 'Failed to find invitee to update.'});
    else return res.status(200).json({updatedInvitee});
  } catch (err) {
    return res.status(500).json({message: 'Failed to update invitee.'});
  }
};

// @desc        Delete invitee
// @route       DELETE /api/v1/invitees/:id
// @access      Private
exports.deleteInvitee = async (req, res, next) => {
  try {
    const deletedInvitee = await Invitee.findByIdAndDelete(req.params.id);
    if (!deletedInvitee)
      return res
        .status(404)
        .json({message: 'Failed to find invitee to delete.'});
    else return res.status(204).json({});
  } catch {
    return res.status(500).json({message: 'Failed to delete invitee.'});
  }
};
