import { createRouter, createWebHistory } from "vue-router";
import Hello from "./views/Hello.vue";
import New from "./views/New.vue";

const routes = [
  {
    path: "/",
    name: "Hello",
    component: Hello,
  },
  {
    path: "/new",
    name: "new",
    component: New,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
