module.exports = {
  plugins: [
    ['@babel/plugin-proposal-decorators', { legacy: true }],
    ['@babel/plugin-proposal-class-properties', { loose: true }],
    '@babel/plugin-proposal-nullish-coalescing-operator',
    '@babel/plugin-proposal-optional-chaining',
  ],
  presets: [
    ['@babel/preset-env', { targets: { esmodules: true }, modules: false }],
    '@babel/preset-react',
    '@babel/preset-typescript',
  ],
};
