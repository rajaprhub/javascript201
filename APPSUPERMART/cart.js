

let cart = JSON.parse(localStorage.getItem("cart")) || [];

diaplayData(cart)


function displayData(cart){

   
    data.map(function(elem){
         var div1 = document.createElement("div")
         var img = document.createElement("img")
         
        var name = document.createElement("h2");
        
        var price = document.createElement("h3")
       
   
        var btn = document.createElement("h3") 
        btn.innerHTML = "Remove from Cart";
        btn.setAttribute=("id","remove") ;

        btn.addEventListener( "click",() => {
            removefromcart(elem);
        })
        div1.append(img,name,price,btn);
        document.querySelector("#cart").append(div1);
    });
  
}

function removefromcart(elem){
    
    localStorage.setItem("cart",JSON.stringify(cart)) ;
     displayData(cart);
    
}