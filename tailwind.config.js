// tailwind.config.js
module.exports = {
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    aspectRatio: {
      1: '1',
      2: '2',
      3: '3',
      4: '4'
    },
    screens: {
      tablet: '640px',
      // => @media (min-width: 640px) { ... }

      laptop: '1024px',
      // => @media (min-width: 1024px) { ... }

      desktop: '1280px'
      // => @media (min-width: 1280px) { ... }
    },
    container: {
      center: true,
      padding: '2rem'
    }
  },
  variants: {
    aspectRatio: ['responsive', 'hover']
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp')
    // ...
  ]
};

//
