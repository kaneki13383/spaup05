export default {
    data() {
        return {
            orders: [],
            message: 'Ваши заказы'
        }
    },
    mounted() {
        document.title = 'Ваши заказы'

        this.getOrder();
    },
    methods: {
        getOrder(){
            fetch(`http://127.0.0.1:8000/api-samohod/order/`,{
                method: "GET",
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('user_token')
                }
            })
            .then(res =>{
                return res.json();
            })
            .then(res =>{
                console.log(res.content);
                this.orders = res.content;

                if(this.orders.length > 0){

                }
                else{
                    this.message = 'Заказов нет'
                }
            })
        }
    },
    template: `<main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">{{message}}</h1>
        </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center bg-light" v-for="order in orders" :key="order">
        <h2 class="w-100">Заказ №{{order.id}}</h2>

        <div class="col" v-for="product in order.products">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">Товар №{{product}}</h4>
                </div>
            </div>
        </div>
        <h2 class="w-100">Итоговая стоимость: {{order.order_price}}р.</h2>
    </div>

    <div class="row justify-content-center gap-1">
        <button class="col-6 btn btn-lg btn-outline-info mb-3" type="button" @click="$router.go(-1)">Назад</button>
    </div>
</main>`
}