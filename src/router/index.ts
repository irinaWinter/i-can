import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import IcvRegister from "@/views/Register.vue";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/register",
    name: "register",
    component: IcvRegister,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
