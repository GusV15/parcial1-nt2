import Vue from "vue";
import VueRouter from "vue-router";

import Notas from "./components/Notas.vue";
import Respuestas from "./components/Respuestas.vue";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/notas" },
    { path: "/notas", component: Notas },
    { path: "/respuestas", component: Respuestas },
  ],
});
