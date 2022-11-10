import mongoose from "mongoose";

const connectToMongo = async () => {
  const res = await mongoose.connect(
    `mongodb+srv://user:user123@blog-app.bx1ohuz.mongodb.net/blog`
  );
  res && console.log("connected");
};

export default connectToMongo;
