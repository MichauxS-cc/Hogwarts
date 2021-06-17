var express = require("express");
var router = express.Router();
const { v4: uuidv4 } = require("uuid");

let buddyList = [
  {
    name: "Harry Potter",
    imgURL:
      "https://static.wikia.nocookie.net/23b32650-e2fd-4b44-bbc5-41d74b5ff6c3",
    description:
      "Graduate student; English half-blood wizard; Gryffindor House; The youngest Quidditch Seeker (winning two Quidditch Cups); Won the Triwizard Tournament in his 4th year; Current jod title: Head of the Department of Magical Law Enforcement.",
    id: "1",
  },
  {
    name: "Hermione Granger",
    imgURL:
      "https://img.24sata.hr/zKPRk4Q2jaPf8ufhvHMoylLqvNM=/1920x0/smart/media/images/src/20131041/1700ee608d7ccb3ad9c2fac71bbf79cc.jpg",
    description:
      "Graduate student; English Muggle-born witch; Gryffindor House; Skills: Hermione proved to be an extremely powerful and talented young witch. Even before she began her education at Hogwarts, she practised some simple spells which all worked. Remus Lupin claimed that Hermione was the cleverest witch of her age he had ever met. Her magical capability easily surpassed almost every single student in her year, challenged only by a select few.",
    id: "2",
  },
  {
    name: "Ronald Weasley",
    imgURL:
      "https://images.ctfassets.net/usf1vwtuqyxm/4kRGmTOvVYmIwsOikwcuUw/b0851098837ddac5951a15ebc2ab82cf/Ron_Weasley_WB_F1_Ron_with_Scabbers_on_shoulder_00393692.jpg",
    description:
      "Graduate student; English pure-blood wizard; Gryffindor House; Gryffindor prefect and a Keeper on the Gryffindor Quidditch team; Co-founder of Dumbledore's Army; Current job title: Auror.",
    id: "3",
  },
  {
    name: "Draco Malfoy",
    imgURL:
      "https://cdn.newsapi.com.au/image/v1/a1d257d1618b572e1b81dc99134d8a06?width=316",
    description:
      "Graduate student; British pure-blood wizard; Slytherin House; Prefect of Slytherin house; Member of the Inquisitorial Squad; Skills: Draco was a talented wizard from a young age and possessed several impressive magical abilities. His wand was made of hawthorn, which one should only ever consider placing in the hands of a witch or wizard of proven talent. Following his training from his aunt Bellatrix Lestrange, Draco grew to be an accomplished wizard for his age.",
    id: "4",
  },
];

/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send(buddyList);
});

router.post("/add", function (req, res, next) {
  const newBuddy = {
    name: req.body.name,
    imgURL: req.body.imgURL,
    description: req.body.description,
    id: uuidv4(),
  };

  buddyList.push(newBuddy);

  res.send(buddyList);
});

router.delete("/delete", function (req, res, next) {
  const removeName = req.body.removeName;
  let i = 0;
  for (; i < buddyList.length; i++) {
    if (buddyList[i].name === removeName) break;
  }
  buddyList.splice(i, 1);
  res.send(buddyList);
});

router.delete("/delete_all", function (req, res, next) {
  buddyList = [];
  res.send(buddyList);
});

router.patch("/update/:id", function (req, res, next) {
  const targetId = req.params.id;
  console.log("update() received id is: " + targetId);

  const buddyToBeUpdated = buddyList.find((buddy) => buddy.id === targetId);
  buddyToBeUpdated.name = req.body.name;
  buddyToBeUpdated.description = req.body.description;

  res.send(buddyList);
});

module.exports = router;

//testing connections with my new device//testing connections with my new device
