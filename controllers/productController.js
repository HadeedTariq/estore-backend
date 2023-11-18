import { Product } from "../models/Product.js";

const createProduct = async (req, res) => {
  try {
    const { productName, productPrice, productDescription, productImage } =
      req.body;
    if (!productName || !productPrice || !productDescription || !productImage) {
      return res.status(404).json({ message: "Please fill  all the fields" });
    }
    await Product.create(req.body);
    return res.status(201).json({ message: "Product is created successfully" });
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

const getAllProducts = async (_, res) => {
  const allProducts = await Product.find({});
  return res.status(200).json(allProducts);
};

const deleteAllProdcuts = async (_, res) => {
  await Product.deleteMany({});
  return res.status(200).json({ message: "Deleted All Products" });
};

export { getAllProducts, createProduct, deleteAllProdcuts };
