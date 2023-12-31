import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";


//* store
import { useUserStore } from '../src/views/Auth/store/AuthStore';

import vue3dLoader from "vue-3d-loader";
import vueform from "@vueform/slider";
import jquery from "jquery";
import coreui from "@coreui/vue";

//Custom ScrollBar
import '@/assets/custom-scrollbar.css'







import "./assets/reset.css";
import "./assets/accordion.css";
import 'primeicons/primeicons.css'


const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(vue3dLoader);
app.use(vueform);
app.use(jquery);
app.use(coreui);


const userStore = useUserStore();
app.component('user-store', userStore);

app.mount("#app");
