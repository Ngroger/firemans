/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'mobile': '320px',

        'tablet': '640px',
  
        'laptop': '1024px',
  
        'desktop': '1280px',
        
        'desktop2': '1520px'
      },
      fontFamily: {
        "neutral": ["NeutralFace", "sans-serif"],
        "inter": ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'rent-image': 'url("../src/images/sliders/slide3.png")',
        'shop-image': 'url("../src/images/background2.png")',
        'education-image': 'url("../src/images/background4.png")',
        'blog-image': 'url("../src/images/background3.png")',
        'contact-image': 'url("../src/images/background.png")'
      }
    },
  },
  plugins: [],
}

