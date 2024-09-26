import { Schema } from "mongoose";

let blogSchema = Schema({
  title: {
    type: String,
    required: [true, "title field is required"],
  },
  description: {
    type: String,
    required: [true, "description field is required"],
  },
  image: {
    type: String,
    required: [true, "img field is required"],
  },
});
export default blogSchema;

