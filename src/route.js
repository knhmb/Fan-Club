import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plan from "./pages/Plan";
import ForgotPassword from "./pages/ForgotPassword";
import SearchCreators from "./pages/SearchCreators";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    { path: "/", redirect: "/home" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/plan", component: Plan },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/search-creators", component: SearchCreators },
  ],
});

export default router;
