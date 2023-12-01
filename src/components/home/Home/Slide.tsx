import Image from "next/image";
import Link from "next/link";

export const Slide = ({
  title,
  description,
  image,
  link,
}: {
  title: string;
  description: string;
  image: string;
  link: {
    to: string;
    label: string;
  };
}) => {
  return (
    <section className="relative grid h-screen w-screen">
      <div className="relative h-screen w-screen">
        <Image
          src={`${process.env.NEXT_PUBLIC_DATA}${image}`}
          alt={title}
          fill={true}
          quality={100}
          priority
          className="object-cover"
        />
      </div>
      <div className="absolute h-screen w-screen bg-black opacity-30" />
      <div className="absolute grid justify-items-center self-center justify-self-center px-48">
        <div className="relative mt-24 grid h-[6rem] w-[50vw] md:h-[8rem] md:w-[20rem]">
          <Image
            src={"/images/white.logo.png"}
            alt={"background"}
            fill={true}
            quality={100}
            priority
            className="object-contain"
          />
        </div>
        <h2 className="mt-[1.5rem] text-[1.5rem] font-bold text-white md:mt-[3rem] md:text-[2.4rem]">
          {title}
        </h2>
        <p className="mt-[1rem] text-justify text-2xl text-white md:mt-[2rem] md:text-center md:text-[1.2rem] md:leading-[1.6rem]">
          {description}
        </p>
        <Link
          className="mt-2rem flex cursor-pointer items-center border-2 border-white px-8 text-[.8rem] font-medium leading-[1.2rem] text-white md:mt-[5rem] md:h-[3.6rem] md:text-[1rem] md:leading-[1.5rem]"
          href={link.to}
        >
          {link.label}
        </Link>
      </div>
    </section>
  );
};
