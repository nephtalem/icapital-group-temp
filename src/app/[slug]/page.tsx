import Image from "next/image";
import PortfolioLogo from "@/assets/portfolio-logo.png";

const PortfolioDetail = () => {
  return (
    <div className="container mx-auto px-6 py-12 md:px-12 lg:px-24">
      {/* Project Header */}
      <div className="border-l-4 border-orange-400 pl-4">
        <span className="text-sm font-semibold uppercase text-orange-400">
          Project
        </span>
        <h1 className="mt-2 text-3xl font-bold md:text-4xl">
          DIGITAL LITERACY ASSESSMENT
        </h1>
      </div>

      {/* Client Section */}
      <section className="mt-8">
        <h2 className="text-xl font-bold">The Client</h2>
        <div className="mt-2 flex items-center gap-4">
          <Image src={PortfolioLogo} alt="GIZ Logo" width={80} height={80} />
          <div>
            <p className="text-lg font-semibold text-red-600">giz Ethiopia</p>
            <p className="max-w-2xl text-sm text-gray-600">
              giz Ethiopia is a lorem ipsum dolor sit amet consectetur. Quisque
              donec elit sed blandit purus vestibulum egestas arcu. A ac nisi et
              adipiscing venenatis tortor erat si quis tempor pellentesque.
            </p>
            <a href="https://www.giz.de" className="text-sm text-orange-500">
              www.giz.de
            </a>
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">The Problem</h2>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget
          volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-600">
          <li>
            Senectus hendrerit rhoncus quis pellentesque suspendisse egestas
            lacus aliquam.
          </li>
          <li>Ipsum odio malesuada vestibulum odio scelerisque duis.</li>
          <li>
            Condimentum interdum ut facilis fusce facilisis. In phasellus diam
            nisi commodo.
          </li>
          <li>
            Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.
          </li>
        </ul>
      </section>

      {/* Solution Section */}
      <section className="mt-12">
        <h2 className="text-xl font-bold">The Solution</h2>
        <h3 className="mt-2 text-lg font-semibold">What We Did</h3>
        <p className="mt-2 text-gray-600">
          Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget
          volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.
        </p>
        <ul className="mt-4 list-disc pl-6 text-gray-600">
          <li>
            Senectus hendrerit rhoncus quis pellentesque suspendisse egestas
            lacus aliquam.
          </li>
          <li>Ipsum odio malesuada vestibulum odio scelerisque duis.</li>
          <li>
            Condimentum interdum ut facilis fusce facilisis. In phasellus diam
            nisi commodo.
          </li>
          <li>
            Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.
          </li>
        </ul>
      </section>
    </div>
  );
};

export default PortfolioDetail;
