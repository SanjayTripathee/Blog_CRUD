import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { bUrl } from "../../constant";

export const blogApi = createApi({
  reducerPath: "blogApi", //reducerPath must be unique
  baseQuery: fetchBaseQuery({
    baseUrl: bUrl,
  }),
  //1)creating tag
  tagTypes: ["readBlog"],

  //in get method write query and for other method write mutation
  endpoints: (builder) => ({
    //making api for blog
    readBlog: builder.query({
      query: () => {
        return {
          url: "/blog",
          method: "GET",
        };
      },
      //2)providing tag
      providesTags: ["readBlog"],
    }),

    readBlogById: builder.query({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "GET",
        };
      },
      providesTags: ["readBlogById"],
    }),

    deleteBlog: builder.mutation({
      query: (id) => {
        return {
          url: `/blog/${id}`,
          method: "DELETE",
        };
      },
      //3)invalidating tag
      invalidatesTags: ["readBlog"],
    }),

    createBlog: builder.mutation({
      query: (body) => {
        return {
          url: "/blog",
          method: "POST",
          body: body,
        };
      },
      invalidatesTags: ["readBlog"],
    }),

    updateBlog: builder.mutation({
      query: (info) => {
        return {
          url: `${bUrl}/blog/${info.id}`,
          method: "PATCH",
          body: info.body,
        };
      },
      invalidatesTags: ["readBlog", "readBlogById"],
    }),
  }),
});

export const {
  useReadBlogQuery,
  useDeleteBlogMutation,
  useReadBlogByIdQuery,
  useCreateBlogMutation,
  useUpdateBlogMutation,
} = blogApi;
