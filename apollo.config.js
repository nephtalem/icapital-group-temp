module.exports = {
  client: {
    includes: ["./src/graphql/**/*.ts"], // array of glob patterns
    service: {
      name: "Icapital",
      url: "https://cms.icapitalafrica.org/graphql",
    },
  },
};
