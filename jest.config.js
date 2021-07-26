module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ".js$": ["@swc/jest"],
  },
  setupFilesAfterEnv: ["./tests/jest-setup.js"],
};
