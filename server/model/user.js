const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String
});

module.exports = mongoose.model("Staff", UserSchema);