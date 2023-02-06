import headerComponent from "./headerComponent.js"
import footerComponent from "./footerComponent.js"
export default {
    components: {headerComponent, footerComponent},
    template: '<headerComponent :key="componentKey"></headerComponent>'+'<router-view></router-view>'+'<footerComponent />',

    data() {
        return {
            user_token: localStorage.getItem('user_token'),
        }
    },
}