const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
  name: { type: String, required: true },
  addresses: [{ type: Schema.Types.ObjectId, ref: 'Address' }]
});

module.exports = mongoose.model('User', UserSchema);
