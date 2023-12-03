import { Intro } from "@/components/blogs/Intro";
import { Content } from "@/components/shared/Content";
import { BlogEntity } from "@/gql/graphql";
import BlogsService from "@/services/blog.service";
import { Metadata } from "next";
import { Blogs } from "@/components/blogs/Blogs";
import { MainText } from "@/components/shared/MainText";

export const metadata: Metadata = {
  title: "News and Blog | The i-Capital Africa Institute",
};

const NewsAndBlogPage = async () => {
  const blogs: BlogEntity[] = await BlogsService.blogs();
  console.log("blogs", blogs);
  return (
    <Content scrollable={true}>
      <Intro />
      <Blogs blogs={blogs} />
    </Content>
  );
};

export default NewsAndBlogPage;
