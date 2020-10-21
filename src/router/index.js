import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/Home";
import ComicsList from "@/components/ComicsList";
import ComicDetail from "@/components/ComicDetail";
import CharactersList from "@/components/CharactersList";
import CharacterDetail from "@/components/CharacterDetail";
import StoriesList from "@/components/StoriesList";
import StoryDetail from "@/components/StoryDetail";
import SeriesList from "@/components/SeriesList";
import SerieDetail from "@/components/SerieDetail";
import EventsList from "@/components/EventsList";
import EventDetail from "@/components/EventDetail";
import CreatorsList from "@/components/CreatorsList";
import CreatorDetail from "@/components/CreatorDetail";

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
  },
  {
    path: "/stories",
    name: "Stories",
    component: StoriesList
  },
  {
    path: "/stories/:entityId",
    name: "StoryDetail",
    component: StoryDetail,
    props: true
  },
  {
    path: "/series",
    name: "Series",
    component: SeriesList
  },
  {
    path: "/series/:entityId",
    name: "SerieDetail",
    component: SerieDetail,
    props: true
  },
  {
    path: "/events",
    name: "Events",
    component: EventsList
  },
  {
    path: "/events/:entityId",
    name: "EventDetail",
    component: EventDetail,
    props: true
  },
  {
    path: "/creators",
    name: "Creators",
    component: CreatorsList
  },
  {
    path: "/creators/:entityId",
    name: "CreatorDetail",
    component: CreatorDetail,
    props: true
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
