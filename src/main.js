import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "vuetify/styles";
import { createVuetify } from "vuetify";
import { aliases, mdi } from "vuetify/iconsets/mdi";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import VueDatePicker from "@vuepic/vue-datepicker";
import { ValidationProvider } from "vee-validate";

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: "mdi",
    aliases,
    sets: {
      mdi,
    },
  },
});

createApp(App)
  .use(vuetify)
  .use(router)
  .component("VueDatePicker", VueDatePicker)
  .component("ValidationProvider", ValidationProvider)
  .mount("#app");
