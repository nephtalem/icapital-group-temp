"use client";

import Image from "next/image";
import Link from "next/link";
import ExploreBanner from "@/assets/eafs/Explore-previous-summits/explore-previous-summits-banner.png";

const ExplorePreviousSummits = () => {
  return (
    <section className="bg-[#F78019] py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Image */}
          <div className="relative h-[300px] w-full overflow-hidden rounded-lg md:h-[400px]">
            <Image
              src={ExploreBanner}
              alt="East Africa Finance Summit Previous Events"
              fill
              style={{ objectFit: "cover", objectPosition: "center" }}
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="text-white">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">
              The East Africa Finance Summit (EAFS) is a premier annual event
            </h2>
            <div className="space-y-4">
              <p>
                Convening financial sector leaders, policymakers, and innovators
                from across East Africa. Hosted in Addis Ababa, the summit
                fosters dialogue on emerging trends, policy reforms, and
                investment opportunities, aiming to enhance regional financial
                integration and collaboration.
              </p>
            </div>
            <div className="mt-8">
              <Link
                href="/previous-summits"
                className="inline-block rounded-full border-2 border-white bg-transparent px-8 py-3 text-center text-sm font-semibold text-white transition duration-300 hover:bg-white hover:text-[#F78019] md:min-w-[200px] lg:text-base"
              >
                Explore Previous Summits
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExplorePreviousSummits;
