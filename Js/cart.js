function getCart(){
    str=``
    str1=``
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
                <p class="f2">${value.description.substring(0,90)}</p>
            </div>
  <p>
                        <span class="qnty" onclick="minus('${i}')"><img src="./img/plus.png" alt=""></span>
                        <span id="txt${i}" class="txt"></span>
                        <span class="qnty" onclick="plus('${i}')"><img src="./img/minus.png" alt=""></span>
                    </p>


            <div class="btrn1">

                <button id="btr" onclick="removeCart(${value.id})">REMOVE</button>

            </div>

        </div> `
      
        
          
    }
    document.getElementById("add").innerHTML=str
    document.getElementById("ad").innerHTML=str1   

}
getCart();

function removeCart(id){
    console.log(id);
    localStorage.removeItem(id);
    getCart();
}