import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/team",
        name: "Team",
        component: () => import("../views/Team.vue"), // for lazy loading
    },
    {
        path: "/product",
        name: "Product",
        component: () => import("../views/Product.vue"),
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

export default router;
