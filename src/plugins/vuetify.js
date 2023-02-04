// Styles
import "@mdi/font/css/materialdesignicons.css";
import "vuetify/styles";

// Vuetify
import { createVuetify } from "vuetify";

export default createVuetify({
  theme: {
    defaultTheme: "myCustomTheme",
    themes: {
      myCustomTheme: {
        dark: false,
        colors: {
          primary: "#422e87",
          black: "#212529",
          secondary: "#757575",
          yellow: "#ffce44",
          green: "#3bd4ae",
        },
      },
    },
  },
});
