module.exports = {
  testMatch: ["**/tests/*.(spec|test).js"],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|svg)$": "<rootDir>/tests/fileTransformer.js",
  },
  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
};
