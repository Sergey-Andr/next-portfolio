const config: any = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        quad: "2560px",
      },
      keyframes: {
        blob: {
          "0%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
          "20%": {
            borderRadius: "50% 60% 40% 50% / 55% 45% 55% 50%",
          },
          "40%": {
            borderRadius: "40% 50% 60% 40% / 50% 60% 30% 60%",
          },
          "60%": {
            borderRadius: "30% 60% 50% 40% / 70% 30% 50% 60%",
          },
          "100%": {
            borderRadius: "60% 40% 30% 70% / 60% 30% 70% 40%",
          },
        },
        "circle-text": {
          from: { rotate: "0deg" },
          to: { rotate: "360deg" },
        },
      },
      animation: {
        blob: "blob 5s linear infinite",
        "circle-text": "circle-text 3s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
