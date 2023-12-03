import { BlogEntity } from "@/gql/graphql";
import { MoreBlog } from "./MoreBlog";

export const MoreBlogs = ({ blogs }: { blogs: BlogEntity[] }) => {
  console.log("moreblogs", blogs);
  return (
    <div className="grid gap-8">
      <h2 className="text-3xl font-bold text-text">More Blogs</h2>
      <div className="grid gap-8">
        {blogs.map((blog, index) => (
          <MoreBlog blog={blog} key={index} />
        ))}
      </div>
    </div>
  );
};
