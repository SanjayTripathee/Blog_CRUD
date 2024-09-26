import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useReadBlogByIdQuery, useUpdateBlogMutation } from "../../services/api/blogService";
import DynamicBlogForm from "./DynamicBlogForm";

const updateBlog = () => {
  let params = useParams();
  let navigate = useNavigate();
  let id = params.id;
  let [
    updateBlog,
    {
      isError: isErrorUpdateData,
      isSuccess: isSuccessUpdateData,
      isLoading: isLoadingUpdateData,
      data: dataUpdateData,
      error: errorUpdateData,
    },
  ] = useUpdateBlogMutation();

  let {
    isError: isErrorUpdateSpeceficData,
    isSuccess: isSuccessUpdateSpeceficData,
    isLoading: isLoadingUpdateSpeceficData,
    data: dataUpdateSpeceficData,
    error: errorUpdateSpeceficData,
  } = useReadBlogByIdQuery(params.id);

  let blog = dataUpdateSpeceficData?.result || {};

  useEffect(() => {
    if (isSuccessUpdateData) {
      console.log("sucessfully updated");
    }
  }, [isSuccessUpdateData]);

  useEffect(() => {
    if (isErrorUpdateData) {
      console.log(errorUpdateData?.error);
    }
  }, [isErrorUpdateData, errorUpdateData]);

  useEffect(() => {
    if (isErrorUpdateSpeceficData) {
      console.log(errorUpdateSpeceficData?.error);
    }
  }, [isErrorUpdateSpeceficData, errorUpdateSpeceficData]);

  let onSubmit = async (values, other) => {
    // hit api
    let body = values;
    updateBlog({ id: id, body: values });
    navigate(`/blog/${id}`);
  };

  return (
    <div>
      <DynamicBlogForm
        buttonName="Update Blog"
        onSubmit={onSubmit}
        blog={blog}
        title="Update Blog"
        isLoading={isLoadingUpdateData}
      />
    </div>
  );
};

export default updateBlog;
