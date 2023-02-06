export default {
    data() {
        return {
            user_token: ''
        }
    },
    methods: {
        logout(){
            fetch('http://127.0.0.1:8000/api-samohod/logout', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                    'Authorization': 'Bearer '+localStorage.getItem('user_token')
                },
            })
            .then(res =>{
                return res.json();
            })
            .then(res =>{
                localStorage.removeItem('user_token')
                this.$router.push('/login');
            })
        },
        getUserToken(){
            this.user_token = localStorage.getItem('user_token');
        }
    },
    watch: {
        '$route'(){
            this.getUserToken();
        }
    },
    template: `<header>
    <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
        <router-link to="/" class="d-flex align-items-center text-dark text-decoration-none">
            <span class="fs-4">«Самоход»</span>
        </router-link>

        <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <router-link v-if="!user_token" to="/register" class="me-3 py-2 text-dark text-decoration-none" href="#">Регистрация</router-link>
            <router-link v-if="!user_token" to="/login" class="me-3 py-2 text-dark text-decoration-none" href="#">Авторизация</router-link>
            <router-link to="/orders" v-if="user_token" class="me-3 py-2 text-dark text-decoration-none" href="#">Мои заказы</router-link>
            <router-link to="/cart" v-if="user_token" class="me-3 py-2 text-dark text-decoration-none" href="#">Корзина</router-link>
            <p v-if="user_token" @click.prevent="logout()" style="cursor: pointer;" class="me-3 py-2 text-dark text-decoration-none" href="#">Выход</p>
        </nav>
    </div>
</header>
        `
}