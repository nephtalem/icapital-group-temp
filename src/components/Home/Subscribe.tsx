"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { useQuery, useMutation } from "@apollo/client";
import { GET_SUBSCRIBE_SECTION, CREATE_SUBSCRIBER } from "@/graphql/home/home";
import { useState } from "react";
import {
  subscriberSchema,
  type SubscriberFormData,
} from "@/lib/validations/subscriber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import ModernLoader from "../ui/ModernLoader";

// Helper to highlight words in heading
function highlightWords(text: string, highlight: string) {
  if (!highlight) return text;
  // Escape special regex characters in highlight
  const escaped = highlight.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return parts.map((part, i) =>
    regex.test(part) ? (
      <span key={i} className="text-orange-400">
        {part}
      </span>
    ) : (
      part
    ),
  );
}

const Subscribe = () => {
  const { data, loading, error } = useQuery(GET_SUBSCRIBE_SECTION);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [message, setMessage] = useState("");

  const [createSubscriber] = useMutation(CREATE_SUBSCRIBER);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<SubscriberFormData>({
    resolver: zodResolver(subscriberSchema),
    defaultValues: {
      email: "",
      consent: false,
      source: "website",
    },
  });

  if (loading) return <ModernLoader />;
  if (error) return <div>Error loading subscribe section.</div>;
  if (!data?.home?.subscribeSection) return null;

  const section = data.home.subscribeSection;
  const heading = section.heading || "with Our News & Announcements!";
  const highlight = section.highlight || "Get Updated";
  const description = section.description || "Subscribe to our newsletter!";
  const emailPlaceholder = section.emailPlaceholder || "Your email";
  const buttonText = section.buttonText || "Subscribe";

  const onSubmit = async (formData: SubscriberFormData) => {
    setStatus("loading");
    try {
      await createSubscriber({
        variables: {
          data: {
            email: formData.email,
            statusType: "active",
            subscribedAt: new Date().toISOString(),
            consent: formData.consent,
            source: formData.source,
          },
        },
      });
      setStatus("success");
      setMessage("Thank you for subscribing!");
      toast.success("Thank you for subscribing!");
      reset();
    } catch (err: any) {
      setStatus("error");
      setMessage(err.message || "Something went wrong");
      toast.error(err.message || "Something went wrong");
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section className="border-t-2 border-blue-400 bg-[#1F3758] px-6 py-12 text-white">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mx-auto flex max-w-6xl flex-col items-center justify-between md:flex-row"
      >
        {/* Left Content */}
        <motion.h2
          variants={itemVariants}
          className="max-w-lg text-2xl font-bold text-white md:text-3xl"
        >
          {highlightWords(heading, highlight)}
        </motion.h2>

        {/* Right Content */}
        <motion.div
          variants={itemVariants}
          className="mt-4 w-full max-w-md md:mt-0"
        >
          <motion.p
            variants={itemVariants}
            className="mb-2 text-sm text-gray-200 md:text-base"
          >
            {description}
          </motion.p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <motion.div
              variants={containerVariants}
              className="flex flex-col gap-4"
            >
              <motion.div className="flex flex-col gap-2">
                <motion.div className="flex overflow-hidden rounded-full bg-white shadow-md">
                  <motion.input
                    variants={inputVariants}
                    type="email"
                    {...register("email")}
                    placeholder={emailPlaceholder}
                    className="w-full px-4 py-2 text-gray-700 focus:outline-none"
                  />
                  <motion.button
                    variants={buttonVariants}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={status === "loading"}
                    className="rounded-full bg-orange-500 px-6 py-2 font-semibold text-white shadow-md transition hover:bg-orange-600 disabled:opacity-50"
                  >
                    {status === "loading" ? "Subscribing..." : buttonText}
                  </motion.button>
                </motion.div>
                {errors.email && (
                  <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-sm text-red-400"
                  >
                    {errors.email.message}
                  </motion.p>
                )}
              </motion.div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="consent"
                  {...register("consent")}
                  className="h-4 w-4"
                />
                <label htmlFor="consent" className="text-sm text-gray-200">
                  I agree to receive marketing emails
                </label>
              </div>
              {errors.consent && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-sm text-red-400"
                >
                  {errors.consent.message}
                </motion.p>
              )}

              {message && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-sm ${
                    status === "success" ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {message}
                </motion.p>
              )}
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
