import Image from "next/image";

export const Banner = () => {
  return (
    <div className="relative m-0 grid h-[15rem] overflow-hidden rounded-none md:mx-[2.5rem] md:my-[3.5rem] md:h-[30rem] md:rounded-[.5rem]">
      <Image
        className="object-cover object-left md:object-center"
        src={"/images/who-we-are.png"}
        alt={""}
        fill={true}
        priority
      />
    </div>
  );
};
