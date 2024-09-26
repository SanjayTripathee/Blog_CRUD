import * as yup from "yup";

export let blogValidationSchema = yup.object({
  title: yup.string().required("Title is required"),
  description: yup.string().required("Description is required"),
  image: yup.string().required("Image is required"),
});
