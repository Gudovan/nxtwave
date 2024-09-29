const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AddressSchema = new Schema({
  street: String,
  city: String,
  country: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Address', AddressSchema);
