const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vueetSchema = new Schema(
  {
    content: {
      type: String,
      minlength: 1,
      maxlength: 280,
      required: true
    },
    likes: {
      type: Number,
      default: 0
    },
    author: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Vueet', vueetSchema);
