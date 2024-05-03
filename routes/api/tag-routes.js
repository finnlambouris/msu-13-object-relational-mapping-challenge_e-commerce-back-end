const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', async (req, res) => {
  try {
    // find all tags
    const tagData = await Tag.findAll({
      // be sure to include its associated Product data
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });
    return res.status(200).json(tagData);
  } catch {
    return res.status(404).send("There is an error with the /api/tags GET route.");
  }
});

router.get('/:id', async (req, res) => {
  try {
    // find a single tag by its `id`
    const tagData = await Tag.findByPk(req.params.id, {
      // be sure to include its associated Product data
      include: [{ model: Product, through: ProductTag, as: "products" }],
    });

    if (!tagData) {
      return res.status(404).send("Product not found.");
    }

    return res.status(200).json(tagData);
  } catch {
    return res.status(404).send("There is an error with the /api/tags/:id GET route.");
  }
});

router.post('/', (req, res) => {
  // create a new tag
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
});

module.exports = router;
