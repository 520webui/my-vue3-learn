import { createRouter, createWebHashHistory } from "vue-router";
const routes = [
  {
    path: "/",
    name: "my-home",
    component: () =>import( "@/views/my-home"),
  },
  {
    path: "/the-one",
    name: "the-one",
    component: () =>import( "@/views/the-one"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
