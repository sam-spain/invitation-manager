import Mongoose from 'mongoose';
const InviteeSchema = new Mongoose.Schema({
  enteredName: {
    type: String,
    required: [true, 'Please enter invitee name'],
  },
  preferredName: {
    type: String,
    trim: true,
    maxLength: [
      100,
      'Name seems too long to us, sorry. Try less than 50 letters',
    ],
  },
  inviteStatus: {
    type: [String],
    required: true,
    enum: ['Not Sent', 'Sent', 'Responded', 'Revoked'],
  },
  contactNumber: {
    type: String,
    trim: true,
  },
  contactEmail: {
    type: String,
    trim: true,
  },
  facebookLink: {
    type: String,
    trim: true,
  },
  preferredContact,
  address: {
    type: String,
    enum: ['Email', 'Number', 'Facebook'],
  },
  location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
      index: '2dsphere',
    },
    formattedAddress: String,
    street: String,
    city: String,
    state: String,
    zipcode: String,
    country: String,
  },
  inviteStatus: {
    type: [String],
    required: true,
    enum: ['Not Sent', 'Sent', 'Responded', 'Revoked'],
  },
  invitedToCeremony: {
    type: Boolean,
    required: [true, 'Please specify if invitee is welcome to attend ceremony'],
  },
  attendingCeremony: {
    type: Boolean,
    default: false,
  },
  invitedToReception: {
    type: Boolean,
    required: [
      true,
      'Please specify if invitee is welcome to attend reception',
    ],
  },
  attendingReception: {
    type: Boolean,
    default: false,
  },
  invitedToExtraEvent: {
    type: Boolean,
    required: [
      true,
      'Please specify if invitee is welcome to attend extra event',
    ],
  },
  attendingExtraEvent: {
    type: Boolean,
    default: false,
  },
  dietaryNotes: String,
  additionalNotes: String,
});

module.exports = Mongoose.model('Invitee', InviteeSchema);
