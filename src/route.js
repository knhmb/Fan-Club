import { createRouter, createWebHistory } from "vue-router";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Plan from "./pages/Plan";
import ForgotPassword from "./pages/ForgotPassword";
import SearchCreators from "./pages/SearchCreators";
import HomeMember from "./pages/HomeMember";
import SearchTagsResults from "./pages/SearchTagsResults";
import Profile from "./components/plan/Profile";
import PlanTab from "./components/plan/PlanTab";
import Product from "./components/plan/Product";
import Post from "./components/plan/Post";
import PostDetail from "./pages/PostDetail";
import ProfileSettings from "./pages/ProfileSettings";
import ProfileInformation from "./pages/ProfileInformation";

const router = createRouter({
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0, behavior: "smooth" };
    }
  },
  history: createWebHistory(),
  routes: [
    { path: "/home", component: Home },
    { path: "/", redirect: "/home" },
    { path: "/login", component: Login },
    { path: "/register", component: Register },
    { path: "/forgot-password", component: ForgotPassword },
    { path: "/search-creators", component: SearchCreators },
    { path: "/home-member", component: HomeMember },
    { path: "/search-tags-results", component: SearchTagsResults },
    {
      path: "/creator",
      component: Plan,
      children: [
        { path: "profile", component: Profile },
        { path: "plan", component: PlanTab },
        { path: "product", component: Product },
        {
          path: "post",
          component: Post,
          children: [{ path: "post-detail", component: PostDetail }],
        },
      ],
    },
    {
      path: "/profile-settings",
      component: ProfileSettings,
      children: [
        { path: "profile-information", component: ProfileInformation },
      ],
    },
  ],
});

export default router;
