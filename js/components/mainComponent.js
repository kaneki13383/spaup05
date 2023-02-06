export default {
    data(){
        return {
            products: [],
            message: 'Добавить в корзину'
        }
    },
    mounted(){
         fetch('http://127.0.0.1:8000/api-samohod/products')
            .then(data =>{
                return data.json();
            })
            .then(data =>{
                this.products = data.content;
            })
            document.title = '«Самоход»'
    },
    methods: {
        addCart(id){
            fetch(`http://127.0.0.1:8000/api-samohod/cart/${id}`,{
                method: "POST",
                headers:{
                    'Authorization': 'Bearer '+localStorage.getItem('user_token')
                }
            })
            .then(res => {
                return res.json();
            })
            .then(res => {
                // console.log(res.content['message']);                
            })
        }
    },
    template: `<main>
    <div class="pricing-header p-3 pb-md-4 mx-auto text-center">
            <h1 class="display-4 fw-normal">Каталог товаров</h1>
        </div>
    <div class="row row-cols-1 row-cols-md-3 mb-3 text-center">
        <div class="col" v-for="product in products" :key="product">
            <div class="card mb-4 rounded-3 shadow-sm">
                <div class="card-header py-3">
                    <h4 class="my-0 fw-normal">{{ product.name }}</h4>
                </div>
                <div class="card-body">
                    <h1 class="card-title pricing-card-title">{{ product.price }}р.</h1>
                    <p>{{ product.description }}</p>
                    <button type="button" class="w-100 btn btn-lg btn-outline-primary" @click.prevent="addCart(product.id)">{{ message }}</button>
                </div>
            </div>
        </div>
    </div>
</main>`
}