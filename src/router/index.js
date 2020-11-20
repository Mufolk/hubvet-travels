import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "../components/HomePage/HomePage.vue";
import TablePage from "../components/TablePage/TablePage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "HomePage",
    component: HomePage
  },
  {
    path: "/tablepage",
    name: "TablePage",
    component: TablePage
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
