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
    overlay: "rgba(18, 20, 23, 0.5)",
    dropDownBg: "rgba(255, 255, 255, 1)",
    arrowIcon: "rgba(18, 20, 23, 1)",
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
};

export { theme };
