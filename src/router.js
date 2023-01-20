import { createRouter, createWebHashHistory } from "vue-router";

const routes = [
  {
    name: "HomePage",
    path: "/",
    component: () => import("@/views/HomePage.vue"),
  },
  {
    name: "NewBookmark",
    path: "/new-bookmark",
    component: () => import("@/views/NewBookmark.vue"),
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

export default router;
