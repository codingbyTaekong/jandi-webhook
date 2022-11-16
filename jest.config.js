// module.exports = {
//     // Automatically clear mock calls, instances, contexts and results before every test
//     clearMocks: true,
  
//     // Indicates whether the coverage information should be collected while executing the test
//     collectCoverage: false,
  
//     // The directory where Jest should output its coverage files
//     coverageDirectory: "coverage",
  
//     // Indicates which provider should be used to instrument code for coverage
//     coverageProvider: "v8",
  
//     // An array of file extensions your modules use
//     moduleFileExtensions: [
//       "js",
//       "mjs",
//       "cjs",
//       "jsx",
//       "ts",
//       "tsx",
//       "json",
//       "node",
//     ],
  
//     // A map from regular expressions to module names or to arrays of module names that allow to stub out resources with a single module
//     moduleNameMapper: {
//       "^@/(.*)$": "<rootDir>/$1",
//     },
  
//     // The test environment that will be used for testing
//     testEnvironment: "jest-environment-node",
  
//     // The glob patterns Jest uses to detect test files
//     testMatch: [
//       "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
//       "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
//     ],
  
//     // An array of regexp pattern strings that are matched against all source file paths, matched files will skip transformation
//     transformIgnorePatterns: ["<rootDir>/node_modules/"],
//   };


module.exports = {
    moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
    transform: {
      "^.+\\.(js|jsx)?$": "babel-jest",
    },
    moduleNameMapper: {
      "^@/(.*)$": "<rootDir>/$1",
      '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
        '<rootDir>/__mocks__/fileMock.js',
      '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
    },
    testMatch: [
      "<rootDir>/**/*.test.(js|jsx|ts|tsx)",
      "<rootDir>/(tests/unit/**/*.spec.(js|jsx|ts|tsx)|**/__tests__/*.(js|jsx|ts|tsx))",
    ],
    // transformIgnorePatterns: ["<rootDir>/node_modules/"],
    setupFiles: ["<rootDir>/envFile.ts"],
  };

// module.exports = async () => {
//   return {
//     // verbose : true,
//     // collectCoverage : true,
//     setupFiles: ["<rootDir>/envFile.ts"],
//     moduleFileExtensions: ["js", "json", "jsx", "ts", "tsx", "json"],
//     transform: {
//       "^.+\\.(js|jsx)?$": "babel-jest",
//     },
//     moduleNameMapper: {
//       "^@/(.*)$": "<rootDir>/$1",
//       '\\.(jpg|ico|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
//         '<rootDir>/__mocks__/fileMock.js',
//       '\\.(css|less)$': '<rootDir>/__mocks__/fileMock.js',
//     },
//     collectCoverageFrom: [
//       "**/*.(t|j)s"
//     ],
//     // coverageDirectory: "../coverage",
//     // testEnvironment: "node"
//   }
// }