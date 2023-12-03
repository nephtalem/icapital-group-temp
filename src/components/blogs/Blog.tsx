import { BlogEntity } from "@/gql/graphql";
import CalendarIcon from "@/assets/icons/calendar.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import moment from "moment";
import Link from "next/link";
export const Blog = ({ blog }: { blog: BlogEntity }) => {
  return (
    <div className="grid justify-items-start rounded-xl p-[2rem] shadow">
      <Link href={`/news-and-blogs/${blog.attributes?.slug}`}>
        <h3 className="text-xl font-bold text-black hover:underline">
          {blog.attributes?.title}
        </h3>
      </Link>
      <div className="mb-4 mt-3 flex w-full justify-between">
        <p className="text-sm font-medium text-black/60">
          Written by {blog.attributes?.author?.data?.attributes?.name}
        </p>

        <div className="flex items-center gap-[.5rem]">
          <CalendarIcon className={"h-3 fill-black/60"} />
          <p className="text-xs font-medium text-black/60">
            {moment(`${blog.attributes?.publishedAt}`).format("MMM D, YYYY")}
          </p>
        </div>
        <div className="flex items-center gap-[.5rem]">
          <EyeIcon className={"h-3 fill-black/60"} />
          <p className="text-xs font-medium text-black/60">
            HITS: {blog.attributes?.hits}
          </p>
        </div>
      </div>
      <p className="text-sm font-medium text-black">
        {blog.attributes?.description}
      </p>
      <Link href={`/news-and-blogs/${blog.attributes?.slug}`}>
        <button className="mt-3 text-xs font-semibold text-accent">
          Read more
        </button>
      </Link>
    </div>
  );
};
