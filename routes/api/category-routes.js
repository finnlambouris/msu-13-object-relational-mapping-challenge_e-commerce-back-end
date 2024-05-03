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

router.get('/:id', async (req, res) => {
  try {
    // find one category by its `id` value
    const categoryData = await Category.findByPk(req.params.id, {
      // be sure to include its associated Products
      include: [{ model: Product }],
    });
    return res.status(200).json(categoryData);
  } catch {
    return res.status(404).send("There is an error with the /api/categories/:id GET route.");
  }
});

router.post('/', async (req, res) => {
  try {
    // create a new category
    const categoryData = await Category.create({
      category_name: req.body.category_name,
    });
    return res.status(200).json(categoryData);
  } catch {
    return res.status(404).send("There is an error with the /api/categories/ POST route.");
  }
});

router.put('/:id', async (req, res) => {
  try {
    // update a category by its `id` value
    let categoryData = await Category.update(
      {
        category_name: req.body.category_name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    )
    return res.status(200).json(categoryData);
  } catch {
    return res.status(404).send("There is an error with the /api/categories/:id PUT route.");
  }
});

router.delete('/:id', async (req, res) => {
  try {
    // delete a category by its `id` value
    let categoryData = await Category.destroy({
      where: {
        id: req.params.id,
      },
    })
    return res.status(200).json(categoryData);
  } catch {
    return res.status(404).send("There is an error with the /api/categories/:id PUT route.");
  }
});

module.exports = router;
