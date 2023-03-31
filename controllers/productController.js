const Product = require("../models/productModel");
const { getPostData } = require("../utils.js");

// @description  Gets All Products
// @route        GET /api/products

async function getProducts(req, res) {
  try {
    const products = await Product.findAll();

    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (error) {
    console.error(error);
  }
}

// @description  Gets Products by id
// @route        GET /api/products/:id

async function getProduct(req, res, id) {
  try {
    const products = await Product.findById(id);

    if (!products) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      res.writeHead(200, { "Content-Type": "application/json" });
      res.end(JSON.stringify(products));
    }
  } catch (error) {
    console.error(error);
  }
}

// @description  Create a product
// @route        POST /api/products

async function createProduct(req, res) {
  try {
    const body = await getPostData(req);

    const { title, description, price } = JSON.parse(body);

    const product = {
      title,
      description,
      price,
    };

    const newProduct = await Product.create(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    return res.end(JSON.stringify(newProduct));
  } catch (error) {
    console.error(error);
  }
}

// @description  Update a product
// @route        PUT /api/products/:id

async function updateProduct(req, res, id) {
  try {
    const products = await Product.findById(id);

    if (!products) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      const body = await getPostData(req);

      const { title, description, price } = JSON.parse(body);

      const productData = {
        title: title || products.title,
        description: description || products.description,
        price: price || products.price,
      };

      const updProduct = await Product.update(id, productData);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(updProduct));
    }
  } catch (error) {
    console.error(error);
  }
}

// @description  Delete a product
// @route        DELETE /api/products/:id

async function deleteProduct(req, res, id) {
  try {
    const products = await Product.findById(id);

    if (!products) {
      res.writeHead(404, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ message: "Product Not Found" }));
    } else {
      await Product.remove(id);
      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(
        JSON.stringify({
          message: `Product of id(${id}) was sucessfully removed.`,
        })
      );
    }
  } catch (error) {
    console.error(error);
  }
}

module.exports = {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
