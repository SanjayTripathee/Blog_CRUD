import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useDeleteBlogMutation, useReadBlogQuery } from "../../services/api/blogService";

const ReadBlogs = () => {  
  let [deleteId, setDeleteId] = useState();
  
  // Query and mutation hooks
  let { isError: isErrorReadBlog, isSuccess: isSuccessReadBlog, isLoading: isLoadingReadBlog, data: dataReadBlog, error: errorReadBlog } = useReadBlogQuery();
  let [deleteBlog, { isError: isErrorDeleteBlog, isSuccess: isSuccessDeleteBlog, isLoading: isLoadingDeleteBlog, data: dataDeleteBlog, error: errorDeleteBlog }] = useDeleteBlogMutation();
  
  let blog = dataReadBlog?.result;
  let navigate = useNavigate();

  useEffect(() => {
    if (isErrorReadBlog) {
      console.log(errorReadBlog?.error);
    }
  }, [isErrorReadBlog, errorReadBlog]);

  useEffect(() => {
    if (isErrorDeleteBlog) {
      console.log(errorDeleteBlog?.error);
    }
  }, [isErrorDeleteBlog, errorDeleteBlog]);

  useEffect(() => {
    if (isSuccessDeleteBlog) {
      console.log("Blog deleted successfully");
    }
  }, [isSuccessDeleteBlog]);

  let handleView = (id) => (e) => {
    navigate(`/blog/${id}`);
  };   

  let handleDelete = (id) => async (e) => {
    Swal.fire({
      title: "Are you sure you want to delete?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        deleteBlog(id);
        setDeleteId(id);   
      }
    });
  };

  let handleUpdate = (id) => (e) => {
    navigate(`/blog/update/${id}`);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "'Roboto', sans-serif" }}>
      <h2 style={{ textAlign: "center", color: "#333", marginBottom: "20px" }}>All Created Files</h2>
      {isLoadingReadBlog ? (
        <div style={{ textAlign: "center" }}>
          <h1>...Loading</h1>
        </div>
      ) : (
        <div style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
        }}>
          {blog?.map?.((item, i) => {
            return (
              <div
                key={i}
                style={{
                  border: "1px solid #ddd",
                  borderRadius: "8px",
                  width: "300px",
                  margin: "15px",
                  padding: "20px",
                  boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
                  transition: "transform 0.2s",
                  textAlign: "center",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <h3 style={{ fontSize: "18px", fontWeight: "bold", marginBottom: "10px" }}>
                  {item.title}
                </h3>
                <p style={{ color: "#555", marginBottom: "15px" }}>
                  {item.description}
                </p>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: "15px" }}>
                  <button
                    onClick={handleView(item._id)}
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#4caf50",
                      color: "#fff",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#45a049";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#4caf50";
                    }}
                  >
                    View
                  </button>
                  <button
                    onClick={handleDelete(item._id)}
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#f44336",
                      color: "#fff",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#e53935";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#f44336";
                    }}
                  >
                    {isLoadingDeleteBlog && item._id === deleteId ? "Deleting..." : "Delete"}
                  </button>
                  <button
                    onClick={handleUpdate(item._id)}
                    style={{
                      padding: "10px 15px",
                      border: "none",
                      borderRadius: "5px",
                      backgroundColor: "#2196f3",
                      color: "#fff",
                      cursor: "pointer",
                      transition: "background-color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "#1e88e5";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "#2196f3";
                    }}
                  >
                    Update
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default ReadBlogs;
