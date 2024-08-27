import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import GeneratorView from "../views/GeneratorView.vue"
import SettingsView from "../views/SettingsView.vue"


export const router = createRouter({
  linkActiveClass: 'link-active',
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: "Home",
      component: HomeView
    },
    {
      path: '/generator',
      name: "Generator",
      component: GeneratorView
    },
    {
      path: '/settings',
      name: "Settings",
      component: SettingsView
    }
  ]
})