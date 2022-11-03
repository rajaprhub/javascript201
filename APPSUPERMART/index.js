

 let itemData ;
   fetch("https://grocery-masai.herokuapp.com/items")
   .then(function(res){
    let x = res.json();
    return x ;
   })

   .then(function(res){
    itemData = res ;
   
    itemData.map((elem) => {
            elem.price = Math.floor(Math.random() * (700-1+1)+1)
    } );
    displayData(itemData) ;

   })
 




function displayData(data){

   
    data.map(function(elem){
         var div1 = document.createElement("div")
         var img = document.createElement("img")
         
        var name = document.createElement("h2");
        
        var price = document.createElement("h3")
       
   
        var btn = document.createElement("h3") 
        btn.innerHTML = "Add to Cart";
        btn.setAttribute=("id","add_to_cart") ;

        btn.addEventListener( "click",() => {
            addtocart(elem);
        })
        div1.append(img,name,price,btn);
        document.querySelector("#groceries").append(div1);
    });
  
}


function addtocart(data){

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(data);
    localStorage.setItem("cart",JSON.stringify(cart));
    cartVal() ;

}

cartVal() ;
function cartVal(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    // document.getElementById("count").innerHTML = '$(cart.length)' ;
  }
  



