let cards = document.querySelectorAll('.add-cart')
let products = [
    {
        name: "LG Ultra HD LED Smart TV" ,
        tag : "lg tv" ,
        price: 50000 ,
        inCart: 0 ,

    },
    {
        name: "Mi 5X Ultra HD Smart TV" ,
        tag : "mi tv" ,
        price: 40000 ,
        inCart: 0 ,

    },
    {
        name: "Motorola HD LED Smart TV" ,
        tag : "motorola tv" ,
        price: 35000 ,
        inCart: 0 ,

    },
    {
        name: "OnePlus HD LED Smart TV" ,
        tag : "oneplus tv" ,
        price: 60000 ,
        inCart: 0 ,

    },
    {
        name: "Realme HD LED Smart TV" ,
        tag : "realme tv" ,
        price: 55000 ,
        inCart: 0 ,

    },
    {
        name: "Samsung HD LED Smart TV" ,
        tag : "samsung tv" ,
        price: 50000 ,
        inCart: 0 ,

    },
    {
        name: "Apple iphone SE" ,
        tag : "apple iphone se" ,
        price: 30000 ,
        inCart: 0 ,

    },
    {
        name: "Apple iphone12 mini" ,
        tag : "apple iphone12" ,
        price: 50000 ,
        inCart: 0 ,

    },
    {
        name: "Oppo A12" ,
        tag : "oppo a12" ,
        price: 10000 ,
        inCart: 0 ,

    },
    {
        name: "Oppo A53" ,
        tag : "oppo a53",
        price: 15000,
        inCart: 0 ,

    },
    {
        name: "Samsung Galaxy F22" ,
        tag : "samsung galaxy f22" ,
        price: 13000 ,
        inCart: 0 ,

    },
    {
        name: "VIVO V23" ,
        tag : "vivo v23" ,
        price: 35000 ,
        inCart: 0 ,

    },
    {
        name: "Xiaomi 11i 5G Smartphone" ,
        tag : "xiaimi 11i 5g" ,
        price: 25000 ,
        inCart: 0 ,

    },
    {
        name: "Boat Rockerz 235" ,
        tag : "boat rockerz 235" ,
        price: 1200 ,
        inCart: 0 ,

    },
    {
        name: "Boat Rockerz 450" ,
        tag : "boat rockerz 450" ,
        price: 1500 ,
        inCart: 0 ,

    },
    {
        name: "Apple Airpods" ,
        tag : "apple airpods" ,
        price: 20000 ,
        inCart: 0 ,

    },
    {
        name: "Apple Headset" ,
        tag : "apple headset" ,
        price: 60000 ,
        inCart: 0 ,

    },
    {
        name: "OnePlus Bullets Wireless" ,
        tag : "oneplus bullets " ,
        price: 2000 ,
        inCart: 0 ,

    },
    {
        name: "GoNoise ColorFit Icon Buzz" ,
        tag : "gonoise colorfit icon" ,
        price: 3500 ,
        inCart: 0 ,

    },
    {
        name: "Apple Watch Series &" ,
        tag : "apple watch" ,
        price: 40000 ,
        inCart: 0 ,

    },
    {
        name: "Titan Watch" ,
        tag : "titan watch" ,
        price: 5000 ,
        inCart: 0 ,

    },
    {
        name: "Sonata Watch" ,
        tag : "sonata watch" ,
        price: 2500 ,
        inCart: 0 ,

    },
    {
        name: "Canon EOS 1500d",
        tag : "canon eos 1500d" ,
        price: 35000 ,
        inCart: 0 ,

    },
    {
        name: "Canon EOS 3000d",
        tag : "canon eos 3000d" ,
        price: 30000 ,
        inCart: 0 ,

    },
    {
        name: "Fujifilm X-64",
        tag : "fujifilm x-64" ,
        price: 83000 ,
        inCart: 0 ,

    },
    {
        name: "GoPro Hero 9",
        tag : "gopro hero9" ,
        price: 35000 ,
        inCart: 0 ,

    },
    {
        name: "SJSCAM Sj6 Legend",
        tag : "sjscam sj6" ,
        price: 10000 ,
        inCart: 0 ,

    },
    {
        name: "boAt Stone 1000",
        tag : "boAt stone1000" ,
        price: 10000 ,
        inCart: 0 ,

    },
    {
        name: "mivi Roam2",
        tag : "mivi roam2" ,
        price: 2000 ,
        inCart: 0 ,

    },
    {
        name: "boAt Stone Generade 5w",
        tag : "boAt stone generade" ,
        price: 3500 ,
        inCart: 0 ,

    },
    {
        name: "JBL Bombox",
        tag : "jbl" ,
        price: 25000 ,
        inCart: 0 ,

    }
];

for(let i=0; i< cards.length; i++){
    cards[i].addEventListener('click' ,  () =>{
        cartNumbers(products[i]);
        totalCost(products[i]);
    })
}
function onLoadcartNumber(){
    let productNumbers = localStorage.getItem('cardNumbers');
    if(productNumbers){
        document.querySelectorAll('.card span').textContent = productNumbers;
    }
}
function  cartNumbers(product){
    // console.log("the product is clicked" , product)
    let productNumbers = localStorage.getItem('cardNumbers');
    productNumbers = parseInt(productNumbers);
    if(productNumbers){
        localStorage.setItem('cardNumbers' , productNumbers + 1);
        document.querySelectorAll('.card span').textContent = productNumbers + 1;
    }
    else{
        localStorage.setItem('cardNumbers' ,  1);
        document.querySelectorAll('.card span').textContent = 1;
    }
    setItems(product);
}

function setItems(product){
    // console.log("Inside the setItems");
    // console.log("The Product is " , product)
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);
    // console.log("My cart items are ", cartItems );
    if(cartItems != null){
        if(cartItems[product.tag] == undefined ){
            cartItems = {
                ...cartItems,
                [product.tag] : product

            }
        }
        cartItems[product.tag].inCart += 1;
    }
    else{
        product.inCart = 1;

        cartItems = {
            [product.tag] : product
        }  
    }


    

    localStorage.setItem("productsInCart" , JSON.stringify(cartItems));
} 

function totalCost(product){                                //function h jo total cost calculate krega
    // console.log("product price is " , product.price);
    let cartCost = localStorage.getItem("totalCost");       //variable decalara kia h jo localStroage se value ko lega
   
    console.log("My cart cost is" , cartCost); 

    if(cartCost != null){                   //agar cost khali nhi hai toh purane vle cost m yeh new product ki cost add ho jayegi
        cartCost = parseInt(cartCost);      //yeh islia kiya h kyuki jb hum local stroage se value lete h toh vo as a string aati h islia usko parse krke number m change krte h
        localStorage.setItem("totalCost" , cartCost + product.price);
    }
    else{
        localStorage.setItem("totalCost" , product.price);  //yeh cost jo product ko firstly select krne pr aayegi
    }

}

function displayCart(){             //Iss function is humare product display hoyenge cart.html me and this function will run when we load the page
    let cartCost = localStorage.getItem("totalCost");       //variable decalara kia h jo localStroage se value ko lega
    let cartItems = localStorage.getItem("productsInCart");
    cartItems = JSON.parse(cartItems);        //Because jb hum localstroage se item lenge toh vo json format m aayega usko Js Object m parse krne k liye.
    let productContainer = document.querySelector(".products");
    if(cartItems && productContainer ){
        productContainer.innerHTML = '';
        Object.values(cartItems).map( item =>{
            productContainer.innerHTML +=  `
            <div class="product">
                <i class="fas fa-times-circle"></i>
                <img src = "./images/${item.tag}.jpeg alt = "product image">
                <span class ="name">${item.name}</span>
                <div class="price">&#8377;${item.price}.00</div>
                <div class="quantity"> <i class="fas fa-arrow-circle-down"></i> <span>${item.inCart}</span><i class="fas fa-arrow-circle-up"></i></div>
                <div class="total"> &#8377; ${item.inCart * item.price} .00 </div>
            </div>
           
            `;

            // productContainer.innerHTML +=  `
            // <div class="basketTotalContainer">
            //     <h4 class"basketTotalTitle">Basket Total</h4>
            //     <h4 class"basetTotal">
            //     &#8377; ${cartCost} .00</h4>
            // `;
            // productContainer.innerHTML = html;
        });
        productContainer.innerHTML +=  `
        <div class="basketTotalContainer">
            <h4 class"basketTotalTitle">Basket Total</h4>
            <h4 class"basetTotal">
            &#8377; ${cartCost} .00</h4>
        `;
    }
}
onLoadcartNumber();
displayCart();              // fun call because hum chate h ki yeh function call ho jb hum page load kre



//buy now button
function buynow(){
    alert("Thankyou for Shopping With US!")
}