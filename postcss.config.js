module.exports = {
  plugins: [
    [
      'postcss-preset-env',
      {
        browsers: ['> 1%', 'last 2 versions', 'not ie <= 8'],
        // CSS Grid 활성화 [false, 'autoplace', 'no-autoplace']
        autoprefixer: {grid: 'autoplace'},
      },
    ],
  ],
};
