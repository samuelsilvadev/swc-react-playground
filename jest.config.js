module.exports = {
  testMatch: ["<rootDir>/src/**/?(*.)+(test).js"],
  testEnvironment: "jsdom",
  transform: {
    ".js$": ["@swc/jest"],
  },
  setupFiles: ["./tests/jest-pre-setup.js"],
  setupFilesAfterEnv: ["./tests/jest-setup.js"],
  moduleNameMapper: {
    "^config/(.*)$": "<rootDir>/src/config/$1",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^hooks/(.*)$": "<rootDir>/src/hooks/$1",
    "^services/(.*)$": "<rootDir>/src/services/$1",
    "^mocks/(.*)$": "<rootDir>/src/mocks/$1",
    "^utils/(.*)$": "<rootDir>/src/utils/$1",
  },
};
