const theme = {
    animation: {
    timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    duration: '300ms',
  },
    colors: {
        lightBlue: '#3470FF',
        btnBgHover: '#0B44CD',
        primaryWhite: '#fff',
        textPrimaryBlack: '121417',
        textLightGray: 'rgba(18, 20, 23, 0.2)',
        textDarkGray: 'rgba(18, 20, 23, 0.5)',
        inputBg: 'rgba(247, 247, 251, 1)',

    },
    fonts: {
      primary: 'Manrope',
      secondary: 'Montserrat',
    },
    fontSizes: {
      vehicleCardTitle: '16px',

    },
    animation: {
      timingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
      duration: '300ms',
    },
    sizing: value => `${value*2}px`
}

export {
  theme
}