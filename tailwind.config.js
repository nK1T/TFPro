// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

export const content = ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"];
export const theme = {
  extend: {
    backgroundColor: {
      primaryBg: "#005195",
      secondaryBg: "#747467",
      tertiaryBg: "#e3e1e1",
      tableHeadBg: "#747467b8",
      grayBg: "#f1f6f9",
      buttonColor: "#8e1535",
    },
    boxShadow: {
      filterShadow:
        "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgb(133 133 133 / 24%) 0px 1px 2px;",
      inputShadow: "rgba(0, 0, 0, 0.06) 0px 2px 4px 0px inset;",
    },
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    colors: {
      primaryBg: "#3d82ab",
      secondaryBg: "#003853",
      tertiaryBg: "#e3e1e1",
      grayBg: "#f1f6f9",
      buttonColor: "#8e1535",
    },
  },
};
export const plugins = [];
