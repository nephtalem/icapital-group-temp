import { BlogEntity } from "@/gql/graphql";
import { Blog } from "./Blog";

export const Blogs = ({ blogs }: { blogs: BlogEntity[] }) => {
  return (
    <div className="mx-[2.5rem] gap-10 mb-[10rem] grid grid-cols-2">
      {blogs.map((blog, index) => (
        <Blog blog={blog} key={index} />
      ))}
    </div>
  );
};
