export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: "fio",
    values: [
      { name: "fio", value: "#E5E5E5" },
      { name: "cleanroom", value: "#E5E5E5" },
      { name: "dark", value: "#333333" },
      { name: "white", value: "#F8F8F8" },
      {
        name: "fioSideNav",
        value: "linear-gradient(180deg, #11497C 0%, #1F8C8C 100%);",
      },
    ],
  },
};