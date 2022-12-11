module.exports = {
  env: {
    production: {
      presets: ["next/babel"],
      plugins: [],
    },
    development: {
      presets: ["next/babel"],
      plugins: [],
    },
    test: {
      presets: [["@babel/preset-env", { targets: { node: "current" } }]],
    },
  },
};
