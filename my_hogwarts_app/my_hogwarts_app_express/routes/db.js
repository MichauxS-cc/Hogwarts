// require("dotenv").config();

var express = require("express");
var router = express.Router();
const mongoose = require("mongoose");
const buddyDB = require("../models/buddy");
const equipmentDB = require("../models/equipment");

try {
  mongoose.connect(
    "mongodb+srv://m001-student:m001-mongodb-basics@sandbox.5gi01.mongodb.net/HarryPotterDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
} catch (error) {
  console.log("[ error ]", error);
}

const db = mongoose.connection;
db.on("error", (err) => {
  console.log("err", err);
});
db.once("open", (err) => {
  console.log("Connected!");
});

const { get } = require("./equipDb");

/* Buddy Query */
router.get("/buddy", (req, res, next) => {
  buddyDB.find({}, function (err, data) {
    res.send(data);
  });
});

router.post("/buddy/add", async (req, res, next) => {
  // console.log("inside add: >>>>>>>>>");

  try {
    const newBuddy = {
      name: req.body.name,
      imgURL: req.body.imgURL,
      description:
        req.body.description === "" ? "No description." : req.body.description,
    };

    await buddyDB.collection.insertOne(newBuddy);
    let data = await buddyDB.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }

  // buddyList.push(newBuddy);

  // res.send(buddyList);
});

router.delete("/buddy/delete", async (req, res, next) => {
  // console.log("inside delete<<<<<<<<<<<<<<<<<<<<<<<<");
  const rName = req.query.name;
  try {
    await buddyDB.collection.deleteOne({ name: rName });
    let data = await buddyDB.find({});
    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

router.delete("/buddy/delete_all", (req, res, next) => {
  // console.log("inside delete_all: >>>>>>>>>");
  buddyDB.collection.drop({}, function (err, data) {
    res.send([]);
  });
});

router.patch("/buddy/update/:id", async (req, res, next) => {
  // console.log("inside update: >>>>>>>>>");

  const targetId = req.params.id;

  try {
    await buddyDB.collection.findOneAndUpdate(
      { _id: mongoose.Types.ObjectId(targetId) },
      { $set: { name: req.body.name, description: req.body.description } }
    );
    let data = await buddyDB.find({});

    res.send(data);
  } catch (err) {
    console.log(err);
  }
});

/* Equipment Query*/
router.get("/equipment", (req, res, next) => {
  equipmentDB.find({}, function (err, data) {
    res.send(data);
  });
});

module.exports = router;
