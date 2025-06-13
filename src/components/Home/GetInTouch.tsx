"use client";

import Image from "next/image";

import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import toast from "react-hot-toast";
import MapComponent from "@/components/Map/MapComponent";

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z
    .string()
    .min(5, "Subject must be at least 5 characters")
    .max(100, "Subject must be less than 100 characters"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "Message must be less than 1000 characters"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

const GetInTouch = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        toast.success("Message sent successfully!");
        reset();
      } else {
        toast.error(
          result.error || "Failed to send message. Please try again.",
        );
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    }
  };

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
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {[
            {
              label: "Name",
              placeholder: "Your full name",
              type: "text",
              name: "name" as const,
            },
            {
              label: "Email Address",
              placeholder: "We will contact you back here",
              type: "email",
              name: "email" as const,
            },
            {
              label: "Subject",
              placeholder: "What is it all about",
              type: "text",
              name: "subject" as const,
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
                {...register(field.name)}
                type={field.type}
                placeholder={field.placeholder}
                className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
              {errors[field.name] && (
                <p className="mt-1 text-sm text-red-500">
                  {errors[field.name]?.message}
                </p>
              )}
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
              {...register("message")}
              rows={4}
              placeholder="Tell us how we can help..."
              className="mt-1 w-full rounded-lg border border-gray-300 p-3 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            {errors.message && (
              <p className="mt-1 text-sm text-red-500">
                {errors.message.message}
              </p>
            )}
          </motion.div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600 disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isSubmitting ? "Sending..." : "Send"}
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
          <MapComponent className="h-full w-full" />
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="absolute bottom-4 left-4 rounded-lg bg-white p-3 shadow-md"
          >
            <p className="font-semibold">Visit Our Office</p>
            <p className="text-sm text-gray-500">
              The i-Capital Africa Institute
            </p>
            <motion.button
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
              className="mt-2 flex items-center gap-1 font-semibold text-orange-500"
              onClick={() =>
                window.open(
                  "https://maps.app.goo.gl/zCmZ9LmY2EMySmS29",
                  "_blank",
                )
              }
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
