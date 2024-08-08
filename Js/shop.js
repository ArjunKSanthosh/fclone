async function fetchProducts(){
    try {
        const res=await fetch('https://dummyjson.com/products')
        const products=await res.json();
        str=``
        str+= `<div class="pro">
            <img src="${products.products[0].thumbnail}" alt="">
            <button class="b1">ADD TO CART</button>
            <button class="b2">BUY NOW</button>

        </div>
        <div class="pro2">
        <h2>${products.products[0].title}</h2>
        <p>${products.products[0].description}</p>
        <h3>Category:${products.products[0].category}</h3>
        <div class="price"><h3>$${products.products[0].price}</h3> <h4><strike>${products.products[0].discountPercentage}</strike>%off</h4></div>
        
        <p><span class="r">Rating:</span> ${products.products[0].rating}<br><br>Stock: ${products.products[0].stock}<br><br> Availibility: <span class="avail">${products.products[0].availabilityStatus}</span></p>
        <p><b>Brand: </b>${products.products[0].brand}</p>
        <p><b>sku: </b>${products.products[0].sku}</p>
        <p><b>Warranty Information: </b>${products.products[0].warrantyInformation}</p>
        <p><b>Shipping Information: </b>${products.products[0].shippingInformation}</p>
        <h3 align="center"><u>Reviews</u></h3>
        <div class="rev">
            <div class="review">
                <p><b>Name:</b>${products.products[0].reviews[0].reviewerName}</p>
                <p><b>Email:</b>${products.products[0].reviews[0].reviewerEmail}</p>
                <p> <b>Date:</b>${products.products[0].reviews[0].date}</p>
                <p><b>Comment:</b>${products.products[0].reviews[0].comment}</p>
    </div>
    <p><b>Return Policy:</b>${products.products[0].returnPolicy}</p>
    <p><b>Minimum Order Quantity</b>${products.products[0].minimumOrderQuantity}</p>

    <img src="${products.products[0].meta.qrCode}" alt="hhh">
    </div>
</div>`
document.getElementById("pdetails").innerHTML=str;

} catch (error) {
    console.log(error);
}
}
fetchProducts();