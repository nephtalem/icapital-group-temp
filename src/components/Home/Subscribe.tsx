"use client";

import { motion, HTMLMotionProps, AnimatePresence } from "framer-motion";
import { useMutation } from "@apollo/client";
import { CREATE_SUBSCRIBER } from "@/graphql/home/home";
import { useState, useEffect } from "react";
import {
  subscriberSchema,
  type SubscriberFormData,
} from "@/lib/validations/subscriber";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

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

// Define the props interface for Subscribe component
interface SubscribeProps {
  subscribeData: any;
}

const Subscribe = ({ subscribeData }: SubscribeProps) => {
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

  // Auto-clear messages after 5 seconds
  useEffect(() => {
    if (status === "success" || status === "error") {
      const timer = setTimeout(() => {
        setMessage("");
        setStatus("idle");
      }, 5000); // 5 seconds

      // Cleanup timer on unmount or when status/message changes
      return () => clearTimeout(timer);
    }
  }, [status, message]);

  // Handle case where subscribeData is not available
  if (!subscribeData?.home?.subscribeSection) {
    return (
      <section className="bg-[#253E5E] px-6 py-16 md:px-12">
        <div className="text-center text-red-500">
          Subscribe data not available
        </div>
      </section>
    );
  }

  const section = subscribeData.home.subscribeSection;
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
      console.error("Subscription error:", err);
      setStatus("error");

      // Extract meaningful error message from Apollo Client error
      let errorMessage = "Something went wrong. Please try again.";

      // Check for timeout errors first
      if (
        err.name === "TimeoutError" ||
        err.code === 23 ||
        err.message?.toLowerCase().includes("timeout")
      ) {
        errorMessage =
          "Request timed out. The server is taking too long to respond. Please try again later.";
        setMessage(errorMessage);
        toast.error(errorMessage);
        return;
      }

      // Function to check if error is about duplicate email
      const isDuplicateError = (text: string) => {
        const lower = text.toLowerCase();
        return (
          lower.includes("unique") ||
          lower.includes("duplicate") ||
          lower.includes("already exists") ||
          lower.includes("already subscribed") ||
          lower.includes("constraint")
        );
      };

      // Check for GraphQL errors
      if (err.graphQLErrors && err.graphQLErrors.length > 0) {
        const graphQLError = err.graphQLErrors[0];

        // Check Strapi's error structure in extensions
        if (graphQLError.extensions?.error) {
          const strapiError = graphQLError.extensions.error;

          // Check if it's a validation error about uniqueness
          if (strapiError.message && isDuplicateError(strapiError.message)) {
            errorMessage =
              "This email is already subscribed to our newsletter.";
          }
          // Check validation details
          else if (strapiError.details?.errors) {
            const validationError = strapiError.details.errors.find(
              (e: any) =>
                e.path?.includes("email") && isDuplicateError(e.message || ""),
            );
            if (validationError) {
              errorMessage =
                "This email is already subscribed to our newsletter.";
            } else if (
              strapiError.message &&
              strapiError.message !== "Internal Server Error"
            ) {
              errorMessage = strapiError.message;
            }
          }
          // Use the strapi error message if not internal server error
          else if (
            strapiError.message &&
            strapiError.message !== "Internal Server Error"
          ) {
            errorMessage = strapiError.message;
          }
        }

        // Fallback to checking the main error message
        const originalError = graphQLError.message || "";
        if (
          errorMessage === "Something went wrong. Please try again." &&
          originalError &&
          originalError !== "Internal Server Error"
        ) {
          if (isDuplicateError(originalError)) {
            errorMessage =
              "This email is already subscribed to our newsletter.";
          } else {
            errorMessage = originalError;
          }
        }
      }

      // Check for network errors
      if (err.networkError) {
        // Check if network error contains response data with errors
        if (err.networkError.result?.errors) {
          const networkError = err.networkError.result.errors[0];

          if (networkError?.extensions?.error) {
            const strapiError = networkError.extensions.error;
            if (strapiError.message && isDuplicateError(strapiError.message)) {
              errorMessage =
                "This email is already subscribed to our newsletter.";
            }
          }
        }

        // If we still have generic message, set network error message
        if (errorMessage === "Something went wrong. Please try again.") {
          errorMessage =
            "Network error. Please check your connection and try again.";
        }
      }

      // Fallback to general error message
      if (
        err.message &&
        errorMessage === "Something went wrong. Please try again."
      ) {
        if (isDuplicateError(err.message)) {
          errorMessage = "This email is already subscribed to our newsletter.";
        } else if (err.message !== "Internal Server Error") {
          errorMessage = err.message;
        }
      }

      setMessage(errorMessage);
      toast.error(errorMessage);
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

              <AnimatePresence mode="wait">
                {message && (
                  <motion.p
                    key="message"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className={`text-sm ${
                      status === "success" ? "text-green-400" : "text-red-400"
                    }`}
                  >
                    {message}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
