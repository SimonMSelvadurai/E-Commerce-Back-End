const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
  // find all tags including its associated Product data
  try {
    const allTags = await Tag.findAll({
      include: [{ model: Product }],
    });
    if (!allTags) {
      res.status(404).json({ message: "ID not found." });
      return;
    }
    res.status(200).json(allTags);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  // find a single tag by its `id` including its associated Product data
  try {
    const oneTag = await Tag.findByPk(req.params.id, {
      include: [{ model: Product }],
    });
    if (!oneTag) {
      res.status(404).json({ message: "ID not found." });
      return;
    }
    res.status(200).json(oneTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post("/", async (req, res) => {
  // create a new tag
  try {
    const newTag = await Tag.create({
      tag_name: req.body.tag_name,
    });
    res.status(200).json(newTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", async (req, res) => {
  // update a tag's name by its `id` value
  try {
    const updateTag = await Tag.update(req.body, {
      tag_name: req.body.tag_name,
      where: {
        id: req.params.id,
      },
    });
    if (!updateTag) {
      res.status(404).json({ message: "ID not found." });
      return;
    }
    res.status(200).json(updateTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", async (req, res) => {
  // delete on tag by its `id` value
  try {
    const delTag = await Tag.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!delTag) {
      res.status(404).json({ message: "ID not found." });
      return;
    }
    res.status(200).json(delTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
