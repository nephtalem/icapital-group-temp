"use client";
import { BlogEntity } from "@/gql/graphql";
import Image from "next/image";
import CalendarIcon from "@/assets/icons/calendar.svg";
import EyeIcon from "@/assets/icons/eye.svg";
import moment from "moment";
import { Html } from "../shared/Html/Html";
import { useEffect } from "react";
import BlogsService from "@/services/blog.service";

export const BlogDetail = ({ blog }: { blog: BlogEntity }) => {
  useEffect(() => {
    const updateViews = async () => {
      const _blog: BlogEntity = await BlogsService.blogById(blog.id!);
      console.log("_blog", _blog);
      await BlogsService.updateBlog(_blog.id!, {
        hits: _blog.attributes!.hits! + 1,
      });
    };
    updateViews();
  }, [blog.id]);

  return (
    <div className="grid">
      <div className="relative grid h-80 lg:h-[28rem] w-full overflow-hidden rounded-3xl">
        <Image
          className="object-cover"
          fill
          priority
          alt={`${blog.attributes?.title}`}
          src={`${blog.attributes?.image?.data?.attributes?.url}`}
        />
      </div>
      <div className="mb-6 mt-6 flex w-full justify-between">
        <p className="text-sm font-medium text-black/60">
          Written by{" "}
          <strong>{blog.attributes?.author?.data?.attributes?.name}</strong>
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
      <h2 className="mb-10 text-3xl font-bold text-text">
        {blog.attributes?.title}
      </h2>
      <Html content={`${blog.attributes?.content}`} />
    </div>
  );
};
