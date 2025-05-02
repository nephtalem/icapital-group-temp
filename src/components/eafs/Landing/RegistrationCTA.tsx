"use client";

import Link from "next/link";

const RegistrationCTA = () => {
  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold text-[#0A244E] md:text-4xl">
            Registration for The 9<sup>th</sup> East African Finance Summit is
            <br />
            Now Open!
          </h2>

          <p className="mb-8 text-center text-gray-700">
            Secure your spot for the upcoming East African Finance Summit on
            <br />
            May 15th 2025 at Skylight Hotel
          </p>

          <div className="flex justify-center">
            <Link
              href="/eafs/registration"
              className="rounded-full bg-[#F78019] px-8 py-3 font-medium text-white transition-all hover:bg-[#e67511] hover:shadow-md"
            >
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistrationCTA;
