
  let parray = JSON.parse(localStorage.getItem("products")) || [];

  function append(){

   let all_products = document.getElementById("all_products");

   parray.forEach(function (elem,index) {
     
    let div =  document.createElement("div") ;
    
     let type = document.createElement("p") ;
     type.innerText = elem.type
     let desc = document.createElement("p") ;
     desc.innerText = elem.desc
     let price = document.createElement("p") ;
     price.innerText = elem.price
     let image = document.createElement("img") ;
     image.src = elem.image
         
     let removeb = document.createElement("button");
      removeb.innerText = "removebtton";

      removeb.addEventListener("click",function(){
        removee(index);
      })

     div.append(image,type,desc,price,removeb)
     all_products.append(div)
    
   })



  }

  append() ;

 function removee(index){

    parray.splice(index,1);
    localStorage.setItem("products",JSON.stringify(parray)) ;
    window.location.reload();

 }