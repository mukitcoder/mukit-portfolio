
const tailwindMobileConfig = require('tailwind-mobile/config');

// wrap your config with tailwindMobileConfig
module.exports = tailwindMobileConfig({
  // JIT mode should be enabled
  mode: 'jit',
  // rest of your usual Tailwind CSS config here
 
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],

  
});
