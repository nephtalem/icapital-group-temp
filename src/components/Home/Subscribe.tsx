const Subscribe = () => {
  return (
    <section className="bg-[#1F3758] text-white py-12 px-6 border-t-2 border-blue-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Left Content */}
        <h2 className="text-2xl md:text-3xl font-bold max-w-lg text-white">
          <span className="text-orange-400">Get Updated</span> with Our News &
          Announcements!
        </h2>

        {/* Right Content */}
        <div className="max-w-md w-full mt-4 md:mt-0">
          <p className="text-sm md:text-base text-gray-200 mb-2">
            Subscribe to our newsletter!
          </p>
          <div className="flex bg-white rounded-full overflow-hidden shadow-md">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 w-full text-gray-700 focus:outline-none"
            />
            <button className="bg-orange-500 text-white px-6 py-2 font-semibold rounded-full shadow-md hover:bg-orange-600 transition">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
