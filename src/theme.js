import WebFont from 'webfontloader'

WebFont.load({
  google: {
    families: ['Source Sans Pro:400', 'sans-serif']
  }
})

const theme = {
  colors: {
    devLogo: '#FC6264',
    mainBackground: '#FFF'
  },
  fonts: {
    primary: {
      family: 'Source Sans Pro, sans-serif',
      weight: 400
    }
  }
}

export default theme
