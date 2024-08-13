let products
async function fetchProducts() {
    try {
        // console.log(window.location);

        const urlParams = new URLSearchParams(window.location.search)
        id = urlParams.get('id');
        const res = await fetch(`https://dummyjson.com/products/${id}`)

        products = await res.json();
        str1=``
        products.images.map((i)=>{
            str1+=`<img onmouseover="changeImage('${i}')" src="${i}" alt="">`
        })
        document.getElementById("pr").innerHTML=str1;
        document.getElementById("img").src=products.thumbnail;
        document.getElementById("a1").innerHTML = products.title
        document.getElementById("a2").innerHTML = products.description
        document.getElementById("a3").innerHTML = `Category:${products.category}`
        document.getElementById("a4").innerHTML = `Price:${products.price}`
        document.getElementById("a41").innerHTML = `<strike>7.17%</strike>`
        document.getElementById("a5").innerHTML = `Rating:${products.rating}`
        document.getElementById("a5").innerHTML = `Rating:${products.rating}`
        document.getElementById("a6").innerHTML = `Stock:${products.stock}`
        document.getElementById("a7").innerHTML = `Brand:${products.brand}`
        document.getElementById("a8").innerHTML = `Sku:${products.sku}`
        document.getElementById("a9").innerHTML = `Warranty Information:${products.warrantyInformation}`
        document.getElementById("a0").innerHTML = `Shipping Information:${products.shippingInformation}`
        str = ``
        products.reviews.map((p) => {
            str += `<div class="review">
    <p><b>Name:</b>${p.reviewerName}</p>
    <p><b>Email:</b>${p.reviewerEmail}</p>
    <p><b>Date:</b>${p.date}</p>
    <p><b>Comment:</b>${p.comment}</p>
    </div>`
        })
        document.getElementById("review").innerHTML = str;

        document.getElementById("b5").innerHTML = `Return Policy:${products.returnPolicy}`
        document.getElementById("b6").innerHTML = `Minimum Order Quantity:${products.minimumOrderQuantity}`
        // document.getElementById("b7").src = `${products.meta.qrCode}`
} catch (error) {
    console.log(error);
}
}
fetchProducts();

function changeImage(img){
    document.getElementById("img").src=img;
}
function addToCart(){
    console.log(products);
    localStorage.setItem(products.id,JSON.stringify(products));
    window.location.href='./cart.html';
    
}