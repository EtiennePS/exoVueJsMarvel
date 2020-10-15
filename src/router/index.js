import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import ComicsList from "@/components/ComicsList";
import ComicDetail from "@/components/ComicDetail";
import CharactersList from "@/components/CharactersList";
import CharacterDetail from "@/components/CharacterDetail";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/characters",
    name: "Characters",
    component: CharactersList
  },
  {
    path: "/characters/:entityId",
    name: "CharacterDetail",
    component: CharacterDetail,
    props: true
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ "@/views/About")
  },
  {
    path: "/comics",
    name: "Comics",
    component: ComicsList
  },
  {
    path: "/comics/:entityId",
    name: "ComicDetail",
    component: ComicDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
