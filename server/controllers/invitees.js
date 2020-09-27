// @desc        Get all invitees
// @route       GET /api/v1/invitees
// @access      Private
exports.getInvitees = (req, res, next) => {
    res.status(200).json({id: 1, name: 'Billy Bobson'});
}

// @desc        Get single invitees
// @route       GET /api/v1/invitees/:id
// @access      Private
exports.getInvitee = (req, res, next) => {
    res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
}

// @desc        Create invitee
// @route       POST /api/v1/invitees
// @access      Private
exports.createInvitee = (req, res, next) => {
    res.status(200).json({id: 1, name: 'Billy Bobson'});
}

// @desc        Update invitee
// @route       PUT /api/v1/invitees/:id
// @access      Private
exports.updateInvitee = (req, res, next) => {
    res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
}

// @desc        Delete invitee
// @route       DELETE /api/v1/invitees/:id
// @access      Private
exports.deleteInvitee = (req, res, next) => {
    res.status(200).json({id: `${req.params.id}`, name: 'Billy Bobson'});
}