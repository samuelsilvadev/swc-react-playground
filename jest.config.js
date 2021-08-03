module.exports = {
  testEnvironment: "jsdom",
  transform: {
    ".js$": ["@swc/jest"],
  },
  setupFilesAfterEnv: ["./tests/jest-setup.js"],
  moduleNameMapper: {
    "^config/(.*)$": "<rootDir>/src/config/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^mocks/(.*)$": "<rootDir>/src/mocks/$1",
  },
};
