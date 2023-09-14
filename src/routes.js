import HomePage from "./components/HomePage.vue";
import UserPage from "./components/UserPage.vue";

export const routes = [
  { path: "/", component: HomePage },
  { path: "/login", component: () => import("./components/LoginPage.vue") },
  { path: "/user", component: UserPage },
];
