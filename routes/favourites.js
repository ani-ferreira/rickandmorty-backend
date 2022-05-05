const router = require("express").Router();
const { Favourite } = require("../models/Favourites");

//post
router.post("/add", async (req, res) => {
  const favourite = new Favourite({
    name: req.body.name,
    gender: req.body.gender,
    image: req.body.image,
  });

  try {
    const savedPost = await favourite.save();
    res.json(savedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

//get
router.get("/", async (req, res) => {
  try {
    const favs = await Favourite.find();
    res.json({ posts: favs });
  } catch (err) {
    res.json({ message: err });
  }
});

//delete
router.delete("/delete/:id", async (req, res) => {
  try {
    const removedFav = await Favourite.deleteOne({ _id: req.params.id });
    res.json(removedFav);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
