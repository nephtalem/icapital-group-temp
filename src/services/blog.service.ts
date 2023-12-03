import { BlogFiltersInput, BlogInput } from "@/gql/graphql";
import { BLOG } from "@/graphql/blogs/blog";
import { BLOG_BY_ID } from "@/graphql/blogs/blog.by.id";
import { BLOGS } from "@/graphql/blogs/blogs";
import { UPDATE_BLOG } from "@/graphql/blogs/update.blog";
import apolloClient from "@/utils/apollo.client";
import { client } from "@/utils/client";

class BlogsService {
  static blogs = async () => {
    try {
      const blogsResult = await client({
        query: BLOGS,
        variables: {},
      });
      return blogsResult.data.blogs.data;
    } catch (e) {}
  };

  static blog = async (filters: BlogFiltersInput) => {
    try {
      const blogResult = await client({
        query: BLOG,
        variables: {
          filters,
        },
      });
      return blogResult.data.blogs;
    } catch (e) {
      console.log("error ", e);
    }
  };

  static blogById = async (blogId: string) => {
    try {
      const blogResult = await client({
        query: BLOG_BY_ID,
        variables: {
          blogId,
        },
      });
      return blogResult.data.blog.data;
    } catch (e) {
      console.log("error ", e);
    }
  };

  static updateBlog = async (updateBlogId: String, data: BlogInput) => {
    try {
      const updateBlogResult = await apolloClient.mutate({
        mutation: UPDATE_BLOG,
        variables: {
          updateBlogId,
          data,
        },
      });
      return updateBlogResult.data.updateBlog;
    } catch (e) {}
  };
}

export default BlogsService;
