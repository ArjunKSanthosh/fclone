function getCart(){
    str=``
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i)
        const value=JSON.parse(localStorage.getItem(key))
        console.log(value);
        str+=`

        <div class="cards">

            <div class="cimg1">

                <img id="cimg" src="${value.thumbnail}" alt="">

            </div>
            <div class="spec">
                <h2>${value.title.substring(0,15)}</h2>
                <p> <span class="f1">Price:</span> $ ${value.price}</p>
            </div>



            <div class="btrn1">

                <button id="btr" onclick="removeCart(${value.id})">REMOVE FROM CART</button>

            </div>

        </div>`
    }
    document.getElementById("add").innerHTML=str
}
getCart();

function removeCart(id){
    console.log(id);
    localStorage.removeItem(id);
    getCart();
}