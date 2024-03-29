import { createRouter, createWebHistory } from "vue-router";
import Todo from "../components/Todo.vue";
import Completed from "../components/Completed.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: Todo,
    },
    {
      path: "/completed",
      name: "completed",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: Completed,
    },
  ],
});

export default router;
