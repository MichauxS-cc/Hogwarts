const mongoose = require("mongoose");

const buddySchema = new mongoose.Schema(
  {
    _id: {
      type: Object,
    },
    name: {
      type: String,
    },
    imgURL: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { collection: "buddyList" }
);
module.exports = mongoose.model("buddyList", buddySchema);
