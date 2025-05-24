"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Footer from "@/components/Home/Footer";
import News1 from "@/assets/news/news1.jpg";
import News2 from "@/assets/news/news2.jpg";
import News3 from "@/assets/news/news3.jpg";
import News4 from "@/assets/news/news4.jpg";

const mockNews = [
  {
    id: 1,
    title: "i-Capital Africa Institute Launches New Leadership Program",
    summary:
      "A new initiative to empower the next generation of African leaders was launched this week, featuring global experts and hands-on workshops.",
    image: News1,
    date: "2024-06-01",
    category: "Announcements",
    isFeatured: true,
    content: `The i-Capital Africa Institute is proud to announce the launch of its groundbreaking Leadership Program, designed to cultivate the next generation of African leaders. This comprehensive initiative brings together global experts, industry leaders, and emerging talents in a collaborative environment focused on innovation and sustainable development.

The program features:
• Intensive workshops led by international leadership experts
• One-on-one mentoring sessions with industry leaders
• Networking opportunities with global business communities
• Practical projects addressing real African challenges
• Access to exclusive resources and research materials

"Our goal is to create a platform where emerging leaders can develop the skills, knowledge, and networks needed to drive positive change across Africa," says Dr. Sarah Johnson, Program Director at i-Capital Africa Institute.

The first cohort will begin in September 2024, with applications now open for qualified candidates. The program is open to professionals across various sectors, including business, technology, public policy, and social entrepreneurship.`,
  },
  {
    id: 2,
    title: "East Africa Finance Summit 2024: Key Takeaways",
    summary:
      "Highlights and insights from the 10th annual summit, including keynote speakers and emerging trends in African finance.",
    image: News2,
    date: "2024-05-20",
    category: "Events",
    isFeatured: false,
    content: `The 10th Annual East Africa Finance Summit concluded with groundbreaking discussions and strategic partnerships that will shape the future of finance in the region. The three-day event brought together over 500 industry leaders, policymakers, and financial experts from across Africa and beyond.

Key Highlights:
• Digital transformation in African banking
• Sustainable finance initiatives
• Cross-border payment solutions
• Fintech innovation and regulation
• Investment opportunities in emerging markets

Notable speakers included Dr. James Mwangi, CEO of Equity Group Holdings, and Dr. Ngozi Okonjo-Iweala, Director-General of the World Trade Organization. The summit also featured the launch of several new initiatives aimed at promoting financial inclusion and sustainable development in East Africa.

The event concluded with the signing of multiple memoranda of understanding between major financial institutions, paving the way for increased collaboration and innovation in the region's financial sector.`,
  },
  {
    id: 3,
    title: "Women in Business: Breaking Barriers in 2024",
    summary:
      "Celebrating the achievements of women leaders and entrepreneurs across Africa, and the institute's role in supporting them.",
    image: News3,
    date: "2024-05-10",
    category: "Insights",
    isFeatured: false,
    content: `The i-Capital Africa Institute's Women in Business initiative continues to make significant strides in supporting and empowering female entrepreneurs across the continent. This year's program has already impacted over 1,000 women-led businesses, providing them with essential resources, mentorship, and networking opportunities.

Program Achievements:
• 45% increase in women-led business growth
• 60% improvement in access to funding
• 75% of participants reporting increased market reach
• 85% of businesses achieving sustainable growth

The initiative includes specialized training programs, access to funding opportunities, and a robust mentorship network connecting emerging entrepreneurs with established business leaders. "We're seeing remarkable results from our participants," says Dr. Amina Hassan, Director of the Women in Business program.

Success stories include tech startups, manufacturing enterprises, and service-based businesses, demonstrating the diverse impact of the program across various sectors.`,
  },
  {
    id: 4,
    title: "i-Capital Partners with Global Think Tanks",
    summary:
      "A new partnership will bring world-class research and policy expertise to the region, fostering innovation and growth.",
    image: News4,
    date: "2024-04-28",
    category: "Announcements",
    isFeatured: false,
    content: `The i-Capital Africa Institute has announced strategic partnerships with leading global think tanks to enhance research capabilities and policy development in Africa. These collaborations will focus on key areas including economic development, technological innovation, and sustainable growth.

Partnership Details:
• Joint research initiatives
• Policy development programs
• Knowledge exchange platforms
• Capacity building workshops
• International networking opportunities

The partnerships include renowned institutions such as the Brookings Institution, the World Economic Forum, and the African Development Bank. "These collaborations will significantly enhance our ability to drive meaningful change in Africa," says Dr. Michael Chen, Research Director at i-Capital.

The initiative will launch with a series of research projects and policy forums, bringing together experts from across the globe to address critical challenges facing the continent.`,
  },
];

const NewsDetail = () => {
  const params = useParams();
  const newsId = parseInt(params.id as string);
  const article = mockNews.find((n) => n.id === newsId);

  if (!article) {
    return (
      <main className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-800">
            Article not found
          </h1>
          <Link
            href="/news"
            className="mt-4 inline-block rounded-full bg-orange-500 px-6 py-2 text-white hover:bg-orange-600"
          >
            Back to News
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[400px] w-full md:h-[500px]">
        <Image
          src={article.image}
          alt={article.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute left-0 top-0 z-20 p-4">
          <Link
            href="/news"
            className="flex items-center gap-2 rounded-full bg-white/20 px-4 py-2 text-sm font-semibold text-white backdrop-blur-md transition hover:bg-white/40 hover:text-orange-500"
          >
            <svg
              className="h-5 w-5"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to News
          </Link>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="max-w-4xl px-4 text-center text-white">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="mb-4 inline-block rounded-full bg-orange-500 px-4 py-1 text-sm font-semibold">
                {article.category}
              </span>
              <h1 className="mb-4 text-3xl font-bold md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              <p className="text-lg text-gray-200">
                {new Date(article.date).toLocaleDateString()}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="mx-auto max-w-4xl px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="prose prose-lg mx-auto"
        >
          {article.content.split("\n\n").map((paragraph, index) => (
            <p key={index} className="mb-6 text-gray-700">
              {paragraph}
            </p>
          ))}
        </motion.div>
      </section>

      <Footer />
    </main>
  );
};

export default NewsDetail;
