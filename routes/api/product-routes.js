const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// Get All Products and its associated Category and Tag data
router.get("/", async (req, res) => {
    try {
      const products = await Product.findAll({
        include: [{ model: Category }, { model: Tag }],
      });
      res.status(200).json(products);
    } catch (err) {
      res.status(500).json({ message: "Products not found!" });
    }
  });
  
  // Get One Product by ID and its associated Category and Tag data
  router.get("/:id", async (req, res) => {
    try {
      const product = await Product.findByPk(req.params.id, {
        include: [{ model: Category }, { model: Tag }],
      });
      !product
        ? res.status(404).json({ message: "Product not found!" })
        : res.status(200).json(product);
    } catch (err) {
      res.status(500).json({ message: "Product not found!" });
    }
  });

// Create New Product
router.post('/', (req, res) => {
  Product.create(req.body)
    .then((product) => {
      // If There is ProductTags - Create Pairings to Bulk Create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // If No ProductTag
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// Update Product
router.put('/:id', (req, res) => {
  // Update Product Data
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      // Find All Associated Tags from ProductTag
      return ProductTag.findAll({ where: { product_id: req.params.id } });
    })
    .then((productTags) => {
      // Get List of Current tag_ids
      const productTagIds = productTags.map(({ tag_id }) => tag_id);
      // Create Filtered List of New tag_ids
      const newProductTags = req.body.tagIds
        .filter((tag_id) => !productTagIds.includes(tag_id))
        .map((tag_id) => {
          return {
            product_id: req.params.id,
            tag_id,
          };
        });
      // Figure Out Which Ones to Remove
      const productTagsToRemove = productTags
        .filter(({ tag_id }) => !req.body.tagIds.includes(tag_id))
        .map(({ id }) => id);

      // Run Both Actions
      return Promise.all([
        ProductTag.destroy({ where: { id: productTagsToRemove } }),
        ProductTag.bulkCreate(newProductTags),
      ]);
    })
    .then((updatedProductTags) => res.json(updatedProductTags))
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.delete('/:id', (req, res) => {
  // Delete One Product by it's `id` value
});

module.exports = router;