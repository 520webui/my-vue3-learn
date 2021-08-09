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
  {
    path: "/the-two",
    name: "the-two",
    component: () =>import( "@/views/the-two"),
  },
  {
    path: "/the-three",
    name: "the-three",
    component: () =>import( "@/views/the-three"),
  },
  {
    path: "/the-four",
    name: "the-four",
    component: () =>import( "@/views/the-four"),
  },
  {
    path: "/the-five",
    name: "the-four",
    component: () =>import( "@/views/the-five"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
