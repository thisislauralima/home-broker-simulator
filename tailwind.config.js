/* eslint-disable quote-props */
/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'custom-white': 'rgb(255,255,255)',
        'my-custom-blue': 'rgb(73,191,250)',
        'my-custom-orange-lighter': 'rgb(243,161,121)',
        'my-custom-orange-darker': 'rgb(236,93,61)',
        'my-custom-pink-lighter': 'rgb(226,77,99)',
        'my-custom-pink-darker': 'rgb(197,71,91)',
        'my-custom-purple-darker': 'rgb(57,70,138)',
        'purple-header': 'rgb(35,38,99)',
        'my-costum-white': 'rgb(248,206,173)',
        'my-custom-gray': 'rgb(63,67,84)',
        'my-custom-yellow': 'rgb(241,149,4)',
        'my-custom-green': 'rgb(64,138,123)',
        'close-btn-gray': 'rgb(134,138,156)',
        'boleta-orange': 'rgb(224,101,57)',
        'boleta-input-color': 'rgb(59,65,87)',
        'boleta-darker-yellow': 'rgb(223,138,54)',
        'boleta-darker-green': 'rgb(52,116,103)',
        'boleta-form-gray': 'rgb(10,12,26)',
        'end-operation-gray-lighter': 'rgb(255,254,255)',
        'end-operation-gray-darker': 'rgb(241,239,241)',
        'end-operation-font-color-gray': 'rgb(144,142,144)',
        'green-operation-done': 'rgb(73,154,121)',
        'stock-purchase-or-buy-bg': 'rgb(29,31,48)',
      },
      screens: {
        'sm-mobiles-s': '300px',
        // @media (min-width: 300) { ... }
        'sm-mobiles-m': '500px',
      },
    },
  },
  plugins: [
    // eslint-disable-next-line import/no-unresolved
    require('@tailwindcss/forms'),
  ],
};
