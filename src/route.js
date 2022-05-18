import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plan from "./pages/Plan";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    { path: "/", redirect: "/home" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/plan", component: Plan },
  ],
});

export default router;
