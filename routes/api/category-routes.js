const router = require('express').Router();
const { Category, Product, Tag } = require('../../models');

// The `/api/categories` endpoint

router.get('/', async (req, res) => {
  try {
      // find all categories
      const categoryData = await Category.findAll({
        // be sure to include its associated Products
        include: [{ model: Product }],
      });
      return res.status(200).json(categoryData);
    } catch {
      return res.status(404).send("There is an error with the /api/categories GET route.");
    }
});

router.get('/:id', (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
});

router.post('/', (req, res) => {
  // create a new category
});

router.put('/:id', (req, res) => {
  // update a category by its `id` value
});

router.delete('/:id', (req, res) => {
  // delete a category by its `id` value
});

module.exports = router;
