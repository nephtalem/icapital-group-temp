export interface PortfolioItem {
  id: number;
  title: string;
  imagePath: string;
  slug: string;
  client: {
    name: string;
    description: string;
    website: string;
  };
  problem: string;
  problemPoints: string[];
  solution: string;
  solutionPoints: string[];
}

export const portfolioData: PortfolioItem[] = [
  {
    id: 1,
    title: "Digital Literacy Assessment",
    imagePath: "/assets/portfolio-img-1.png",
    slug: "digital-literacy-assessment",
    client: {
      name: "giz Ethiopia",
      description:
        "giz Ethiopia is a lorem ipsum dolor sit amet consectetur. Quisque donec elit sed blandit purus vestibulum egestas arcu. A ac nisi et adipiscing venenatis tortor erat si quis tempor pellentesque.",
      website: "www.giz.de",
    },
    problem:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    problemPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
    solution:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    solutionPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
  },
  {
    id: 2,
    title: "Job Description, Job Evaluation and Competency Assessment",
    imagePath: "/assets/portfolio-img-2.png",
    slug: "job-description-job-evaluation-and-competency-assessment",
    client: {
      name: "giz Ethiopia",
      description:
        "giz Ethiopia is a lorem ipsum dolor sit amet consectetur. Quisque donec elit sed blandit purus vestibulum egestas arcu. A ac nisi et adipiscing venenatis tortor erat si quis tempor pellentesque.",
      website: "www.giz.de",
    },
    problem:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    problemPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
    solution:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    solutionPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
  },
  {
    id: 3,
    title: "Organizational Transformation",
    imagePath: "/assets/portfolio-img-3.png",
    slug: "organizational-transformation",
    client: {
      name: "giz Ethiopia",
      description:
        "giz Ethiopia is a lorem ipsum dolor sit amet consectetur. Quisque donec elit sed blandit purus vestibulum egestas arcu. A ac nisi et adipiscing venenatis tortor erat si quis tempor pellentesque.",
      website: "www.giz.de",
    },
    problem:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    problemPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
    solution:
      "Lorem ipsum dolor sit amet consectetur. Sodis odio enim eget sed. Eget volutpat ut maecenas mauris diam. Auctor nullam quam ut posuere lorem.",
    solutionPoints: [
      "Senectus hendrerit rhoncus quis pellentesque suspendisse egestas lacus aliquam.",
      "Ipsum odio malesuada vestibulum odio scelerisque duis.",
      "Condimentum interdum ut facilis fusce facilisis. In phasellus diam nisi commodo.",
      "Est consequat vestibulum magna rhoncus adipiscing volutpat nulla.",
    ],
  },
  // Add more portfolio items here...
];

export function getPortfolioItemBySlug(
  slug: string,
): PortfolioItem | undefined {
  return portfolioData.find((item) => item.slug === slug);
}
