
const mq = {
  laptop: "@media screen and (min-width: 768px)",
  widescreen: "@media screen and (min-width: 1440px)",

}

const theme = {
  colors: {
    lightBlue: "#3470FF",
    btnBgHover: "#0B44CD",
    primaryWhite: "#fff",
    conditionBg: "#F9F9F9",
    textPrimaryBlack: "#121417",
    textPrimarySemiTransparent: "rgba(18, 20, 23, 0.5)",
    textLightGray: "rgba(18, 20, 23, 0.2)",
    textDarkGray: "rgba(18, 20, 23, 0.5)",
    inputBg: "rgba(247, 247, 251, 1)",
    inputInnerBorder: "rgba(138, 138, 137, 0.2)",
    labelGrey: 'rgba(138, 138, 137, 1)',
    overlay: "rgba(18, 20, 23, 0.5)",
    dropDownBg: "rgba(255, 255, 255, 1)",
    dropDownBorder: "rgba(18, 20, 23, 0.05)",
    arrowIcon: "rgba(18, 20, 23, 1)",
    navText: "#fff",
    header: "rgba(18, 20, 23, 0.5)",
    navLinkHover: "rgba(18, 20, 23, 0.5)",
    persistentWhite: "#fff",
    rentalFeaturesText: "rgba(18, 20, 23, 0.5)",
    priceSpan: "#3470FF",
  },
  fonts: {
    primary: "Manrope",
    secondary: "Montserrat",
  },
  fontSizes: {
    vehicleCardTitle: "16px",
  },
  animation: {
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    duration: "300ms",
  },
  sizing: (value) => `${value * 2}px`,
  mq,
};

const darkTheme = {
 colors: {
    lightBlue: "#3470FF",
    btnBgHover: "#0B44CD",
    primaryWhite: "black",
    conditionBg: "rgb(111, 115, 112)",
    textPrimaryBlack: "white",
    textPrimarySemiTransparent: "white",
    textLightGray: "rgba(18, 20, 23, 0.2)",
    textDarkGray: "white",
    inputBg: "rgb(111, 115, 112)",
    inputInnerBorder: "rgba(138, 138, 137, 0.2)",
    labelGrey: 'rgba(138, 138, 137, 1)',
    overlay: "rgba(18, 20, 23, 0.5)",
    dropDownBg: "rgb(111, 115, 112)",
    dropDownBorder: "rgba(18, 20, 23, 0.05)",
    arrowIcon: "rgba(18, 20, 23, 1)",
    navText: "white",
    header: 'black',
    navLinkHover: "red",
    persistentWhite: "#fff",
    rentalFeaturesText: "white",
    priceSpan: "white",
  },
  fonts: {
    primary: "Manrope",
    secondary: "Montserrat",
  },
  fontSizes: {
    vehicleCardTitle: "16px",
  },
  animation: {
    timingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    duration: "300ms",
  },
  sizing: (value) => `${value * 2}px`,
  mq
};

export { theme, darkTheme };
