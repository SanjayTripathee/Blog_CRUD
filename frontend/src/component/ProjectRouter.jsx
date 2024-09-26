import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import CreateBlog from "./projectComponent/CreateBlog";
import ReadBlogById from "./projectComponent/ReadBlogById";
import ReadBlogs from "./projectComponent/ReadBlogs";
import UpdateBlog from "./projectComponent/UpdateBlog";

const ProjectRouter = () => {
  

  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar/> <Outlet />
            </div>
          }
        >
          <Route index element={<h1>Home page</h1>}></Route>
          <Route path="blog" element={<Outlet />}>
            <Route
              index
              element={
                <div>
                  <ReadBlogs/>
                </div>
              }
            ></Route>
            <Route
              path=":id"
              element={
                <div>
                  <ReadBlogById/>
                </div>
              }
            ></Route>
            <Route
              path="create"
              element={
                <div>
                  <CreateBlog/>
                </div>
              }
            ></Route>
            <Route
              path="update"
              element={
                <div>
                  <Outlet />
                </div>
              }
            >
              <Route index element={<div>Update blog</div>}></Route>
              <Route
                path=":id"
                element={
                  <div>
                    <UpdateBlog/>  
                  </div>
                }
              ></Route>
            </Route>
          </Route>
          <Route path="*" element={<div>Page not found</div>}></Route>
        </Route>
        <Route path="*" element={<div>Page not found</div>}></Route>
      </Routes>
    </div>
  );
};

export default ProjectRouter;
