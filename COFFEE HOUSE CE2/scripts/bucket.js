// On clicking remove button the item should be removed from DOM as well as localstorage.

let coffee = JSON.parse(localStorage.getItem("coffee"))|| [];
  
displayData(coffee) ;

function displayData(data,index){

 document.querySelector("#bucket").innerHTML = "";

    data.map(function (elem){

     let divb = document.createElement('div');

     let image = document.createElement('img');
     image.src = elem.image ;
     let name = document.createElement('p');
     name.innerText= elem.title
     let price = document.createElement('p');
     price.innerHTML= `price: ${ elem.price} RP` ;

   var btn = btn = document.createElement("button");
   btn.innerHTML = "Delete to bucket" ;
   btn.setAttribute("id","remove_coffee")
   btn.addEventListener("click",()=>{
    remove_coffee(index);
    })

    divb.append(image,name,price,btn) ;
    document.querySelector("#bucket").append(divb) ;

  })
 

}

function remove_coffee(index){

    coffee.splice(index,1);
    localStorage.setItem("coffee",JSON.stringify(coffee));
     console.log(bucket)
    displayData(bucket) ;
}