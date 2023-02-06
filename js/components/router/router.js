import mainComponent from '../mainComponent.js'
import registerComponent from '../registerComponent.js'
import authComponent from '../authComponent.js'
import orderComponent from '../orderComponent.js';
import cartComponenet from '../cartComponenet.js';

const routes = [
    { path: "/", component: mainComponent, alias: '/'},
    { path: "/register", component: registerComponent },
    { path: "/login", component: authComponent },
    { path: "/orders", component: orderComponent },
    { path: "/cart", component: cartComponenet }
];

const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes
})

export default router;