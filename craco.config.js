// craco.config.js
module.exports = {
  style: {
    postcss: {
      plugins: plugins => [require('tailwindcss').concat('postcss-import')],
    },
  },
};
