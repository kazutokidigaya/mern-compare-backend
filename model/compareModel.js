import mongoose from "mongoose";

const compareSchema = new mongoose.Schema(
  {
    name: { type: String },
    price: { type: String },
    rating: { type: String },
    img: { type: String },
  },
  { timestamps: true }
);

const compareModel = mongoose.model("compare", compareSchema);
export default compareModel;
