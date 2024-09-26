import expressAsyncHandler from "express-async-handler";
import { Blog } from "../schema/model.js";

export const createBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result1 = await Blog.create(req.body);
    res.status(201).json({
      success: true,
      message: "Blog created successfully",
      result: result1,
    });
  }
);
export const readAllBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result = await Blog.find({});
    res.status(200).json({
      success: true,
      message: "Blog read successfully",
      result: result,
    });
  }
);

export const readSpecificBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result3 = await Blog.findById(req.params.id);
    res.status(200).json({
      success: true,
      message: "Specific Blog read successfully",
      result: result3,
    });
  }
);

export const updateBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result4 = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(201).json({
      success: true,
      message: "Blog updated successfully",
      result: result4,
    });
  }
);

export const deleteBlogController = expressAsyncHandler(
  async (req, res, next) => {
    let result5 = await Blog.findByIdAndDelete(req.params.id);
    res.status(200).json({
      success: true,
      message: "Blog deleted successfully",
      result: result5,
    });
  }
);
