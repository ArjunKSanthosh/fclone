let qu=[];
let total=0;
function getCart(){
    str=``
    str1=``
    for(i=0;i<localStorage.length;i++){
        qu[i]=1;
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
                        <span class="qnty" onclick="minus('${i}')"><img src="./img/minus.png" alt=""></span>
                        <span id="txt${i}" class="txt"></span>
                        <span class="qnty" onclick="plus('${i}')"><img src="./img/plus.png" alt=""></span>
                    </p>


            <div class="btrn1">

                <button id="btr" onclick="removeCart(${value.id})">REMOVE</button>

            </div>

        </div> `
        str1+=`<tr>
                    <td id="td">${value.title}</td>
                    <td id="td${i}"></td>
                    <td id="pr${i}">3</td>
                </tr>`
      
        
          
    }
    document.getElementById("add").innerHTML=str
    document.getElementById("tbl").innerHTML=str1
    
    for(i=0;i<localStorage.length;i++){
        const key=localStorage.key(i);
        const value=JSON.parse(localStorage.getItem(key));
        document.getElementById(`txt${i}`).innerHTML=qu[i];
        document.getElementById(`td${i}`).innerHTML=qu[i];
        cost=value.price-(value.price*value.discountPercentage/100);
        c=cost*qu[i];
        console.log(c);
        total+=c;
        document.getElementById(`pr${i}`).innerHTML=`$${c.toString().substring(0,7)}`;
    }
}
getCart();

function removeCart(id){
    console.log(id);
    localStorage.removeItem(id);
    getCart();
}
function minus(j){
    a=parseInt(j);
    qu[a]-=1;
    console.log(qu[a]);
    document.getElementById(`txt${a}`).innerHTML=qu[a];
    document.getElementById(`td${a}`).innerHTML=qu[a];
    const key=localStorage.key(a);
    const value=JSON.parse(localStorage.getItem(key));
    cost=value.price-(value.price*value.discountPercentage/100);
    c=cost*qu[a];
    console.log(c);
    total+=c;
    document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
    document.getElementById("tm").innerHTML=`Total Amount: $${total.toString().substring(0,7)}`
}
function plus(i){
    a=parseInt(i);
    qu[a]++;
    document.getElementById(`txt${a}`).innerHTML=qu[a];
    document.getElementById(`td${a}`).innerHTML=qu[a];
    const key=localStorage.key(a);
    const value=JSON.parse(localStorage.getItem(key));
    cost=value.price-(value.price*value.discountPercentage/100);
    c=cost*qu[a];
    console.log(c);
    total+=c;
    console.log(total);
    document.getElementById(`pr${a}`).innerHTML=`$${c.toString().substring(0,7)}`;
    document.getElementById("tm").innerHTML=`Total Amount: $${(total+5).toString().substring(0,7)}`
}
function clearA(){
    localStorage.clear();
    document.body.innerHTML="<h2>Cart empty..</h2><a href='./index.html'>Go to products</a>";
}