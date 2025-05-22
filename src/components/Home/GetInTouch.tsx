"use client";

import Image from "next/image";
import Map from "@/assets/map-img.png";
import { motion } from "framer-motion";

const GetInTouch = () => {
  const formVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const infoVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-6 py-12 md:grid-cols-2">
      {/* Left - Contact Form */}
      <motion.div
        variants={formVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="rounded-lg bg-gray-100 p-8 shadow-md"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="mb-4 text-2xl font-bold text-[#1F3758]"
        >
          Get <span className="text-orange-500">InTouch</span> with Us
        </motion.h2>
        <form className="space-y-4">
          {[
            { label: "Name", placeholder: "Your full name", type: "text" },
            {
              label: "Email Address",
              placeholder: "We will contact you back here",
              type: "email",
            },
            {
              label: "Subject",
              placeholder: "What is it all about",
              type: "text",
            },
          ].map((field, index) => (
            <motion.div
              key={field.label}
              custom={index}
              variants={inputVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false }}
            >
              <label className="block text-sm font-semibold">
                {field.label}
              </label>
              <input
                type={field.type}
                placeholder={field.placeholder}
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </motion.div>
          ))}
          <motion.div
            custom={3}
            variants={inputVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
          >
            <label className="block text-sm font-semibold">Your Message</label>
            <textarea
              rows={4}
              placeholder="Tell us how we can help..."
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Send
          </motion.button>
        </form>
      </motion.div>

      {/* Right - Contact Info & Map */}
      <motion.div
        variants={infoVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="flex flex-col space-y-6"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5 }}
          className="text-xl font-semibold text-[#1F3758]"
        >
          Prefer a Direct Approach?
        </motion.h3>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-gray-700"
        >
          <p className="flex items-center gap-2">📞 +251 1108080</p>
          <p className="flex items-center gap-2">
            📧 contact@icapitalafrica.org
          </p>
        </motion.div>

        {/* Map Section with Fixed Height Issue */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="relative h-[400px] w-full overflow-hidden rounded-lg shadow-md md:h-full"
        >
          <Image
            src={Map}
            alt="Office Location"
            layout="fill"
            objectFit="cover"
          />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-md"
          >
            <p className="font-semibold">Visit Our Office</p>
            <p className="text-sm text-gray-500">
              Lorem Building, Bole, Addis Ababa, Ethiopia
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex items-center gap-1 font-semibold text-orange-500"
            >
              Get directions →
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default GetInTouch;
