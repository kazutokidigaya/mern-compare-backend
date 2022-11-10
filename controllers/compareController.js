import compareModel from "../model/compareModel.js";

class compareController {
  static getAllProducts = async (req, res) => {
    try {
      const fetchallProducts = await compareModel.find({});
      return res.status(200).json(fetchallProducts);
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static addNewProducts = async (req, res) => {
    const { name, price, rating, img } = req.body;

    try {
      if (name && price && rating) {
        const addProduct = new compareModel({
          name: name,
          price: price,
          rating: rating,
          img: img,
        });
        const savedProduct = await addProduct.save();
        if (savedProduct) {
          return res.status(200).json({ message: "Product added succesfully" });
        } else {
          return res.status(400).json({ message: "All fields are required" });
        }
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };

  static getSingleData = async (req, res) => {
    const { id } = req.params;
    try {
      if (id) {
        const fetchsingleData = await compareModel.findById(id);
        return res.status(200).json(fetchsingleData);
      } else {
        return res.status(400).json({ message: "Invalid url/id" });
      }
    } catch (error) {
      return res.status(400).json({ message: error.message });
    }
  };
}

export default compareController;
