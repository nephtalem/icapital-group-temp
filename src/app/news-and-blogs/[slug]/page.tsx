import BlogsService from "@/services/blog.service";
import { Metadata, ResolvingMetadata } from "next";
import { Content } from "@/components/shared/Content";
import { BlogDetailLayout } from "@/components/blog-detail/BlogDetailLayout";
import { BlogDetail } from "@/components/blog-detail/BlogDetail";
import { MoreBlogs } from "@/components/blog-detail/MoreBlogs";
import { BlogEntity } from "@/gql/graphql";

export async function generateMetadata(
  { params }: { params: { slug: string } },
  parent: ResolvingMetadata,
): Promise<Metadata> {
  const document = await BlogsService.blog({
    slug: {
      eq: params.slug,
    },
  });
  console.log("document", document.data[0]);
  return {
    title: `${document.data[0]?.attributes?.title} | The i-Capital Africa Institute`,
  };
}

const BlogDetailPage = async ({ params }: { params: { slug: string } }) => {
  const [blog, blogs] = await Promise.all([
    BlogsService.blog({
      slug: {
        eq: params.slug,
      },
    }),
    BlogsService.blogs(),
  ]);
  console.log(blog, blogs, params.slug);
  return (
    <Content scrollable={true}>
      <BlogDetailLayout>
        <BlogDetail blog={blog.data[0]} />
        <MoreBlogs
          blogs={blogs.filter((b: BlogEntity) => b.id !== blog.data[0].id)}
        />
      </BlogDetailLayout>
    </Content>
  );
};

export default BlogDetailPage;
