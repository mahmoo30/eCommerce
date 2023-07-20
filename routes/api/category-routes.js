const router = require('express').Router();
const { Category, Product } = require('../../models');

// Get All Categories and Their Associated Products
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll({ include: [{ model: Product }] });
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: 'not found!' });
  }
});

// Get a Single Category and its Associated Products by ID
router.get('/:id', async (req, res) => {
  try {
    const category = await Category.findByPk(req.params.id, { include: [{ model: Product }] });
    if (!category) {
      res.status(404).json({ message: 'id not found' });
      return;
    }
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json({ message: 'not found!' });
  }
});

// Create a New Category
router.post('/', async (req, res) => {
  try {
    const newCategory = await Category.create(req.body);
    res.status(200).json(newCategory);
  } catch (err) {
    res.status(400).json({ message: 'creation failed' });
  }
});

// Update a Category by ID
router.put('/:id', async (req, res) => {
  try {
    const updated = await Category.update(req.body, { where: { id: req.params.id } });
    !updated[0] 
    ? res.status(404).json({ message: 'id not found' }) 
    : res.status(200).json(updated);
  } catch (err) {
    res.status(500).json({ message: 'update failed' });
  }
});

// Delete a category by ID
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Category.destroy({ where: { id: req.params.id } });
    !deleted 
    ? res.status(404).json({ message: 'id not found' }) 
    : res.status(200).json(deleted);
  }
  catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;