import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    { path: "/", redirect: "/home" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
  ],
});

export default router;
