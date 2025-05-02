import Footer from "@/components/Home/Footer";
import Header from "@/components/Home/Header";
import { Button } from "@/components/shared/buttons/Button";
import Image from "next/image";
import HeroImg from "@/assets/hero-img.png"; // Ensure this path is correct

const RegisterNow = () => {
  return (
    <div>
      <Header iconColor="text-white" />
      <main className="relative min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="relative h-[60vh] w-full">
          {/* Background Image */}
          <Image
            src={HeroImg}
            alt="Event audience"
            layout="fill"
            objectFit="cover"
            className="brightness-75"
            priority
          />
          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(89.66deg, rgba(37, 62, 94, 0.5) 0.29%, rgba(247, 128, 25, 0.5) 99.71%)",
            }}
          ></div>
          {/* Text Content */}
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center px-6 text-center text-white">
            <h1 className="mb-4 text-3xl font-extrabold leading-tight sm:text-4xl md:text-5xl">
              Register for the 10<sup>th</sup> East Africa Finance Summit
            </h1>
            <p className="max-w-2xl text-lg sm:text-xl">
              Join industry leaders and finance experts for an insightful event.
              Don&apos;t miss out!
            </p>
          </div>
        </div>

        {/* Registration Section */}
        <section className="my-16 flex flex-col items-center px-6 text-center md:px-12">
          <h2 className="text-2xl font-bold text-gray-800 sm:text-3xl md:text-4xl">
            Secure Your Spot Today
          </h2>
          <p className="mt-4 max-w-xl text-gray-600 sm:text-lg">
            Register now to be part of one of the most impactful financial
            summits in Africa.
          </p>
          <Button label="Register Now" className="mt-6 px-8 py-3 text-lg" />
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default RegisterNow;
