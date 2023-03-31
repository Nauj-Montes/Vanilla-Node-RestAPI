const products = require("../data/products.json");
const { v4: uuidv4 } = require("uuid");

const { writeDataToFile } = require("../utils.js");

function findAll() {
  return new Promise((resolve, reject) => {
    resolve(products);
  });
}

function findById(id) {
  return new Promise((resolve, reject) => {
    const product = products.find((object) => object.id === id);
    resolve(product);
  });
}

function create(product) {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
    writeDataToFile("./data/products.json", products);
    resolve(newProduct);
  });
}

function update(id, product) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((objectId) => objectId.id === id);
    products[index] = { id, ...product };

    writeDataToFile("./data/products.json", products);
    resolve(products[index]);
  });
}

function remove(id) {
  return new Promise((resolve, reject) => {
    const index = products.findIndex((objectId) => objectId.id === id);
    products.splice(index);

    writeDataToFile("./data/products.json", products);
    resolve();
  });
}

module.exports = {
  findAll,
  findById,
  create,
  update,
  remove,
};
