import { gql } from "@apollo/client";

export const GET_PORTFOLIO_BY_SLUG = gql`
  query GetPortfolioBySlug($slug: String!) {
    portfolios(filters: { slug: { eq: $slug } }) {
      title
      slug
      cardImage {
        url
        width
        height
      }
      logoImage {
        url
        width
        height
      }
      clientName
      clientDescription
      clientWebsite
      problem
      problemPoint {
        point
      }
      solution
      solutionPoint {
        point
      }
    }
  }
`;

export const GET_ALL_PORTFOLIOS = gql`
  query GetAllPortfolios {
    portfolios {
      title
      slug
      cardImage {
        url
        width
        height
      }
    }
  }
`;
