import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useReadBlogByIdQuery } from "../../services/api/blogService";

const ReadBlogById = () => {
  let params = useParams();

  let {
    isError: isErrorViewBlog,
    isSuccess: isSuccessViewBlog,
    isLoading: isLoadingViewBlog,
    data: dataViewBlog,
    error: errorViewBlog,
  } = useReadBlogByIdQuery(params.id);
  //   console.log(dataViewBlog?.result);
  let blog = dataViewBlog?.result;
  useEffect(() => {
    if (isErrorViewBlog) {
      console.log(errorViewBlog?.error);
    }
  }, [isErrorViewBlog, errorViewBlog]);
  return (
    <div>
      {isLoadingViewBlog ? (
        <h1>....Loading</h1>
      ) : (
        <div>
          {/* specefic blog only i.e 1 blog datail so, we dont use map here ok.. */}
          <p>title:{blog?.title}</p>
          <p>description:{blog?.description}</p>
          {blog?.image && (
            <img
              src={blog.image}
              alt="blog"
              style={{ width: "200px", height: "200px" }}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default ReadBlogById;
