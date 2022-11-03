//store the products array in localstorage as "products"

document.querySelector("#products").addEventListener("submit",storeData);

function sproducts(t,d,p,i){
   this.type = t;
   this.desc = d;
   this.price = p;
   this.image = i;
}

function storeData(){
    event.preventDefault();

    let form = document.getElementById("products");

    let type = form.type.value ;
    let desc = form.desc.value ;
    let price = form.price.value ;
    let image = form.image.value ;

    let s1 = new sproducts(type,desc,price,image) ;

    let parray = JSON.parse(localStorage.getItem("products")) || [];
    parray.push(s1)
    localStorage.setItem("products",JSON.stringify(parray)) ;
     console.log(s1)
}