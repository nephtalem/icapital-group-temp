import Image from "next/image";
import Map from "@/assets/map-img.png";

const GetInTouch = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10">
      {/* Left - Contact Form */}
      <div className="bg-gray-100 p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-[#1F3758] mb-4">
          Get <span className="text-orange-500">InTouch</span> with Us
        </h2>
        <form className="space-y-4">
          <div>
            <label className="text-sm font-semibold block">Name</label>
            <input
              type="text"
              placeholder="Your full name"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block">Email Address</label>
            <input
              type="email"
              placeholder="We will contact you back here"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block">Subject</label>
            <input
              type="text"
              placeholder="What is it all about"
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <div>
            <label className="text-sm font-semibold block">Your Message</label>
            <textarea
              rows={4}
              placeholder="Tell us how we can help..."
              className="w-full p-3 border border-gray-300 rounded-lg mt-1 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg w-full hover:bg-orange-600 transition"
          >
            Send
          </button>
        </form>
      </div>

      {/* Right - Contact Info & Map */}
      <div className="flex flex-col space-y-6">
        <h3 className="text-xl font-semibold text-[#1F3758]">
          Prefer a Direct Approach?
        </h3>
        <div className="text-gray-700">
          <p className="flex items-center gap-2">📞 +251 1108080</p>
          <p className="flex items-center gap-2">
            📧 contact@icapitalafrica.org
          </p>
        </div>

        {/* Map Section with Fixed Height Issue */}
        <div className="relative w-full h-[400px] md:h-full rounded-lg overflow-hidden shadow-md">
          <Image
            src={Map}
            alt="Office Location"
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-4 left-4 bg-white p-3 rounded-lg shadow-md">
            <p className="font-semibold">Visit Our Office</p>
            <p className="text-sm text-gray-500">
              Lorem Building, Bole, Addis Ababa, Ethiopia
            </p>
            <button className="mt-2 text-orange-500 font-semibold flex items-center gap-1">
              Get directions →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouch;
