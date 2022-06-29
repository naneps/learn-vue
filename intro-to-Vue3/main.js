const app = Vue.createApp({
    data(){
        return{
            dataProducts: [

            ],
            cart:0,
            product : {
                name : "Kaos Kaki",
                price : 1000000,
                description :'lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonumy eirmod tempor',
                image:'./assets/images/socks_blue.jpg',
                url : 'https://getbootstrap.com/docs/5.0/components/card/',
                inStock: false,
                inventory:0,
                onSale:false,
                details: [
                    "50% Catoon " ,"30 Wool", "20% Polyster"
                ],
                variants:[
                    { id : 2343 , color: 'green'},
                    { id : 2654 , color: 'blue'}
                ],
                size: [
                    32 , 25 , 20
                ]
                
            }
           
        }
    },
    methods: {
         
    },
})