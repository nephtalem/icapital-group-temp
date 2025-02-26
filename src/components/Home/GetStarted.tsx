import React from "react";

const GetStarted = () => {
  return (
    <section className="bg-white px-6 py-16 text-center">
      <div className="mx-auto max-w-4xl">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-[#061C3D] md:text-4xl">
          Empower Your Business—Transform, Innovate, and Lead Today!
        </h2>

        {/* Description */}
        <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
          Join us in shaping the future of business excellence.
        </p>

        {/* Services List */}
        <div className="mt-4 flex flex-wrap justify-center gap-3 text-sm text-gray-600 md:text-base">
          <span className="flex items-center gap-2 sm:border-r-2 border-gray-500 px-2">
            <span className="text-orange-500">◆</span> Business Consulting
          </span>
          <span className="flex items-center gap-2 sm:border-r-2 border-gray-500 px-2">
            <span className="text-orange-500">◆</span> HR & Workforce
            Development
          </span>
          <span className="flex items-center gap-2 sm:border-r-2 border-gray-500 px-2">
            <span className="text-orange-500">◆</span> Digital Transformation
          </span>
          <span className="flex items-center gap-2">
            <span className="text-orange-500">◆</span> Capital Market Solutions
          </span>
        </div>

        {/* Button */}
        <button className="mx-auto mt-6 flex items-center gap-2 rounded-full bg-orange-500 px-6 py-3 text-sm font-semibold text-white shadow-md transition hover:bg-orange-600">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
