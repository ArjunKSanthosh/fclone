async function fetchProducts(){
    try {
        const res=await fetch('https://dummyjson.com/products')
        const products=await res.json;
        str=``
    } catch (error) {
        
    }
}