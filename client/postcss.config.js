module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        "mt-320": "320px", //iphone 5
        "mt-414": "414px",
        "mt-568": "568px",
        "mt-768": "768px", //ipad
        "mt-812": "812px",
        "mt-991": "991px",
        "mt-1024": "1024px", //ipad pro
        "mt-1280": "1280px", //mt dang sd
        "mt-1700": "1700px",
        "2xl": "2000px",
      },
    },
  },
  plugins: [],
};
