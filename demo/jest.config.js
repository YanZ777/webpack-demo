module.exports = {
   testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?)$",
   setupFilesAfterEnv: ["./jest.setup.js"],
   moduleFileExtensions: ["js", "jsx", "json", "node"],
   moduleNameMapper: {
      '^working-with-webpack/demo(.*)$': '<rootDir>/src$1',
   },
};