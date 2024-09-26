import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useCreateBlogMutation } from "../../services/api/blogService";
import DynamicBlogForm from "./DynamicBlogForm";

const CreateBlog = () => {
  let navigate = useNavigate();
  let [
    createBlog,
    {
      isError: isErrorCreateData,
      isSuccess: isSuccessCreateData,
      isLoading: isLoadingCreateData,
      error: errorCreateData,
    },
  ] = useCreateBlogMutation();

  useEffect(() => {
    if (isSuccessCreateData) {
      console.log("sucessfully created");
      navigate("/blog");
    }
  }, [isSuccessCreateData]);

  useEffect(() => {
    if (isErrorCreateData) {
      console.log(errorCreateData?.error);
    }
  }, [isErrorCreateData, errorCreateData]);

  let onSubmit = async (values, other) => {
    // hit api
    let body = values;
    createBlog(body);
  };

  return (
    <div>
      <DynamicBlogForm
        buttonName="Creact Blog"
        onSubmit={onSubmit}
        title="Create Blog"
        isLoading={isLoadingCreateData}
      />
    </div>
  );
};

export default CreateBlog;
