import mongoose from "mongoose";

const connectToMongoDb = async () => {
  await mongoose.connect("mongodb://0.0.0.0:27017/self");
  console.log("application is connected to mongodb database successfully");
};
export default connectToMongoDb;
