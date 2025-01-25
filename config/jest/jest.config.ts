export default {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.jsx?$": "babel-jest",
  },
  moduleNameMapper: {
    "\\.(css|less|sass|scss)$": "identity-obj-proxy",
    "^.+\\.svg$": "jest-transformer-svg",
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  rootDir: "../../",
  testMatch: [ "<rootDir>src/**/*(*.)@(spec|test).[ts]s?(x)" ],
  modulePaths: [ "<rootDir>src" ],
  moduleDirectories: [ "node_modules", "src" ],
  setupFilesAfterEnv: [ "<rootDir>config/jest/jest.setup.ts" ],
};
