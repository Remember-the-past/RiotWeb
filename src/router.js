// router.js
import { createRouter, createWebHashHistory } from 'vue-router';


import About from "./history.vue"
import Index from "./index.vue"
const routes = [
    { path: '/', component: Index },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

export default router;
