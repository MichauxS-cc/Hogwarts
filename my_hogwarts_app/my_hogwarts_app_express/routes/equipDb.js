var express = require("express");
var router = express.Router();

let equipmentList = [
  {
    name: "Cauldron",
    price: 1400,
    img: "https://nypost.com/wp-content/uploads/sites/2/2018/10/witch-cauldron.jpg?quality=80&strip=all",
    id: "1",
    year: 4,
    cat: "gear",
  },
  {
    name: "Wond",
    price: 2800,
    img: "https://cdn.europosters.eu/image/750/posters/harry-potter-wands-i67834.jpg",
    id: "2",
    year: 1,
    cat: "uncategorised",
  },

  {
    name: "Quill Pen",
    price: 900,
    img: "https://www.nostalgicimpressions.com/v/vspfiles/photos/200JX-2.jpg?v-cache=1569497929",
    id: "4",
    year: 0,
    cat: "uncategorised",
  },
  {
    name: "Wanderings with Werewolves",
    price: 1800,
    img: "http://pa1.narvii.com/6872/34143f0c6f285d688731d4fa1c2e95d1c96daeedr1-512-512_00.gif",
    id: "6",
    year: 2,
    cat: "book",
  },
  {
    name: "Travels with Trolls",
    price: 1900,
    img: "https://i.pinimg.com/originals/ee/13/5b/ee135bbd3fd9f6049e912f33f577891c.jpg",
    id: "5",
    year: 2,
    cat: "book",
  },
  {
    name: "Broom",
    price: 3900,
    img: "https://images.saymedia-content.com/.image/t_share/MTc0NDYxMTA0MjE3NzkzODk2/best-brooms-harry-potter.jpg",
    id: "3",
    year: 0,
    cat: "uncategorised",
  },
  {
    name: "Owl",
    price: 4900,
    img: "https://assets.teenvogue.com/photos/5665bcd09ddb4a237dfaba9f/16:9/w_2560%2Cc_limit/MSDHAPO_EC075_H.JPG",
    id: "7",
    year: 1,
    cat: "uncategorised",
  },
  {
    name: "Dress robes",
    price: 3900,
    img: "https://i.pinimg.com/originals/2d/9c/4e/2d9c4e46017542294d2b0ffcb86a0757.jpg",
    id: "8",
    year: 4,
    cat: "uncategorised",
  },
  {
    name: "Phial",
    price: 1300,
    img: "https://www.cdiscount.com/pdt2/5/6/6/1/700x700/auc8800212187566/rw/collier-harry-potter-and-felixfelicis-phial-neckla.jpg",
    id: "9",
    year: 1,
    cat: "gear",
  },
  {
    name: "Telescope",
    price: 2500,
    img: "https://i.pinimg.com/474x/af/2d/c8/af2dc872fdb47e1f9738bd88985aae38.jpg",
    id: "10",
    year: 1,
    cat: "gear",
  },
  {
    name: "Brass scales",
    price: 3500,
    img: "https://profmcgonagall101213.files.wordpress.com/2013/10/scale1.jpg",
    id: "11",
    year: 3,
    cat: "gear",
  },
  {
    name: "The Monster Book of Monsters",
    price: 1200,
    img: "http://vignette4.wikia.nocookie.net/harrypotter/images/1/15/Monster_Book_of_Monsters..png/revision/latest?cb=20150114133309",
    id: "12",
    year: 3,
    cat: "book",
  },
];

/* GET users listing. */
router.get("/", (req, res, next) => {
  res.send(equipmentList);
});

router.get("/sortHtoL", (req, res, next) => {
  equipmentList.sort((a, b) => {
    return b.price - a.price;
  });
  res.send(equipmentList);
});

router.get("/sortLtoH", (req, res, next) => {
  equipmentList.sort((a, b) => {
    return a.price - b.price;
  });
  res.send(equipmentList);
});

router.get("/sortByYear/:year/filterCat/:cat", (req, res, next) => {
  let year = parseInt(req.params.year);
  let cat = req.params.cat;
  // console.log("year is: " + year);

  let newEquipmentList = [...equipmentList];

  if (year !== 0 && year) {
    newEquipmentList = newEquipmentList.filter((equipment) => {
      return equipment.year === year;
    });
  }
  if (cat !== "all" && cat) {
    newEquipmentList = newEquipmentList.filter((equipment) => {
      return equipment.cat === cat;
    });
  }

  res.send(newEquipmentList);
});

module.exports = router;
