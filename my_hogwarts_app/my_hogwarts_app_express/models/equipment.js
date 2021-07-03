const mongoose = require("mongoose");

const equipmentSchema = new mongoose.Schema(
  {
    _id: {
      type: Object,
    },
    name: {
      type: String,
    },
    price: {
      type: Number,
    },
    imgURL: {
      type: String,
    },
    year: {
      type: Number,
    },
    cat: {
      type: String,
    },
  },
  { collection: "equipmentList" }
);
module.exports = mongoose.model("equipmentList", equipmentSchema);
