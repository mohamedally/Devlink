import WebFont from "webfontloader";

WebFont.load({
  google: {
    families: ["Source Sans Pro:400", "sans-serif"]
  }
});

const theme = {
  colors: {
    devLogo: "#FC6264",
    mainBackground: "#FFF"
  },
  fonts: {
    primary: {
      family: "Times New Roman, sans-serif",
      weight: 50
    }
  }
};

export default theme;
