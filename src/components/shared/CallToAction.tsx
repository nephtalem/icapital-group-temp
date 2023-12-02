"use client";

import { Html } from "@/components/shared/Html/Html";
export const CallToAction = ({ callToAction }: { callToAction: string }) => {
  return (
    <div className="m-[10rem] grid justify-items-center">
      <Html
        style={{
          fontSize: "2.4rem",
          lineHeight: "4rem",
          fontWeight: "600",
          color: "black",
          textAlign: "center",
        }}
        content={`${callToAction}`}
      />
    </div>
  );
};
