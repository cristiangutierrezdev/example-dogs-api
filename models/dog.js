const mongoose = require("mongoose");
const dogSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  breed: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  color: {
    type: String,
  },
  age: {
    type: Number,
  },
  favoriteToy: {
    type: String,
  },
  personality: {
    type: String,
  },
  bio: {
    type: String,
  },
});

const Dog = mongoose.model("Dog", dogSchema);

module.exports = Dog;
