import { Form, Formik } from "formik";
import React from "react";
import FormikTextArea from "../formikField/FormikTextArea";
import FormikInput from "../formikField/FormikInput";
import { blogValidationSchema } from "../../validation";

const DynamicBlogForm = ({
  buttonName = "",
  onSubmit = () => {},
  blog = {},
  title = "",
  isLoading = false,
}) => {
  let initialValues = {
    title: blog.title || "",
    description: blog.description || "",
    image: blog.image || "",
  };

  return (
    <div
      style={{
        maxWidth: "600px",
        margin: "0 auto",
        padding: "20px",
        backgroundColor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "20px",
          fontFamily: "'Roboto', sans-serif",
        }}
      >
        {title}
      </h2>

      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={blogValidationSchema}
        enableReinitialize={true}
      >
        {(formik) => {
          return (
            <Form>
              <div style={{ marginBottom: "20px" }}>
                <FormikInput
                  name="title"
                  label="Blog Title:"
                  type="text"
                  placeholder="Enter blog title"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                  onChange={(e) =>
                    formik.setFieldValue("title", e.target.value)
                  }
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormikInput
                  name="image"
                  label="Blog Image:"
                  type="text"
                  placeholder="Enter blog image URL"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                  }}
                  onChange={(e) =>
                    formik.setFieldValue("image", e.target.value)
                  }
                />
              </div>

              <div style={{ marginBottom: "20px" }}>
                <FormikTextArea
                  name="description"
                  label="Description:"
                  placeholder="Enter blog description"
                  style={{
                    width: "100%",
                    padding: "10px",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    boxSizing: "border-box",
                    minHeight: "150px",
                  }}
                  onChange={(e) =>
                    formik.setFieldValue("description", e.target.value)
                  }
                />
              </div>

              <div style={{ textAlign: "center" }}>
                <button
                  type="submit"
                  style={{
                    padding: "10px 20px",
                    backgroundColor: "#4CAF50",
                    color: "#fff",
                    fontSize: "16px",
                    borderRadius: "5px",
                    border: "none",
                    cursor: isLoading ? "not-allowed" : "pointer",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    transition: "background-color 0.3s ease",
                  }}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <div>{buttonName}.....</div>
                  ) : (
                    <div>{buttonName}</div>
                  )}
                </button>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default DynamicBlogForm;
