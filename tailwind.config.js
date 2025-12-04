// module.exports = {
//   darkMode: 'class',
//   content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './app/Components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: { extend: {
     colors: {
        primary: {
          DEFAULT: '#4F46E5',   // Primary main
          light: '#6366F1',     // Primary light
          dark: '#4338CA', 
          card:'indigo-800',     // Primary dark #9a99d1
        },
        secondary: {
          DEFAULT: '#EC4899',   // Secondary main
          light: '#F472B6',     // Secondary light
          dark: '#DB2777',      // Secondary dark
        },
      },
  } },
  plugins: [],
};
