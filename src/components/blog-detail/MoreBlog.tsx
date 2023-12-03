import { BlogEntity } from "@/gql/graphql";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";

export const MoreBlog = ({ blog }: { blog: BlogEntity }) => {
  return (
    <Link href={`/news-and-blogs/${blog.attributes?.slug}`}>
      <div className="grid grid-cols-[1fr,2fr] items-center gap-5 rounded p-4 shadow">
        <div className="relative grid h-[6rem] overflow-hidden rounded-xl">
          <Image
            className="object-cover"
            fill
            alt={`${blog.attributes?.title}`}
            src={`${process.env.NEXT_PUBLIC_DATA}${blog.attributes?.image?.data?.attributes?.url}`}
          />
        </div>
        <div className="grid gap-1">
          <p className="text-xs font-medium text-black/60">
            {moment(`${blog.attributes?.publishedAt}`).format("MMM D, YYYY")}
          </p>
          <h3 className="line-clamp-3 text-ellipsis text-base font-semibold text-black hover:underline">
            {blog.attributes?.title}
          </h3>
        </div>
      </div>
    </Link>
  );
};
