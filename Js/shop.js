async function fetchProducts(){
    try {
        console.log(window.location);
        
        const urlParams=new URLSearchParams(window.location.search)
        id=urlParams.get('id');
        const res=await fetch(`https://dummyjson.com/products/${id}`)
        
        const products=await res.json();
        console.log(products.images);
        
        str=``
        str+= 
document.getElementById("a1").innerHTML=products.title
document.getElementById("a2").innerHTML=products.description
document.getElementById("a3").innerHTML=`Category:${products.category}`
document.getElementById("a4").innerHTML=`${products.price}`
document.getElementById("a41").innerHTML=`<strike>7.17%</strike>`
document.getElementById("a5").innerHTML=`Rating:${products.rating}`
document.getElementById("a5").innerHTML=`Rating:${products.rating}`
document.getElementById("a6").innerHTML=`Stock:${products.stock}`
document.getElementById("a7").innerHTML=`Brand:${products.brand}`
document.getElementById("a8").innerHTML=`Sku:${products.sku}`
document.getElementById("a9").innerHTML=`Warranty Information:${products.warrantyInformation}`
document.getElementById("a0").innerHTML=`Shipping Information:${products.shippingInformation}`
document.getElementById("hh").innerHTML=`Review`











document.getElementById("img").src=products.thumbnail



} catch (error) {
    console.log(error);
}
}
fetchProducts();