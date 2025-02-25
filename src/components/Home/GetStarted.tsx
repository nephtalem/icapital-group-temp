const GetStarted = () => {
  return (
    <section className="bg-white text-center py-16 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
          Lorem ipsum dolor sit amet consectetur.
        </h2>

        {/* Description */}
        <p className="text-gray-500 mt-4 text-sm md:text-base leading-relaxed">
          Lorem ipsum dolor sit amet cons sed pretium lorem vel. Id aliquam
          tellus aliquam tellus viverra velit elit in eget consequat hendrerit.
        </p>

        {/* Button */}
        <button className="mt-6 bg-orange-500 text-white px-6 py-3 rounded-full text-sm font-semibold flex items-center gap-2 mx-auto shadow-md hover:bg-orange-600 transition">
          Get Started →
        </button>
      </div>
    </section>
  );
};

export default GetStarted;
