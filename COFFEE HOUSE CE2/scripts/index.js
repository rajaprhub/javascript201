// Add the coffee to local storage with key "coffee"
let url = `https://masai-api.herokuapp.com/coffee/menu`
getData()

async function getData(){
   
    try{
        let res = await fetch(url);
        let data = await res.json();
        console.log(data)
        append(data.menu.data)
    }
    catch (err){ 
        console.log(err);
    }

}

function append(data){

    let container = document.getElementById('menu')
    container.innerHTML = null ;
    data.forEach(function (elem){

     let divb = document.createElement('div');

     let image = document.createElement('img');
     image.src = elem.image ;
     let name = document.createElement('p');
     name.innerText= elem.title
     let price = document.createElement('p');
     price.innerHTML= `price: ${ elem.price} RP` ;

   var btn = document.createElement("button");
   btn.innerHTML = "Add to Bucket" ;
   btn.setAttribute("id","add_to_bucket")
   btn.addEventListener("click",()=>{
    add_to_bucket(elem);
    })

    divb.append(image,name,price,btn) ;
    document.querySelector("#menu").append(divb) ;

  })
}


function add_to_bucket(data){
    let coffee = JSON.parse(localStorage.getItem("coffee"))|| [];
    coffee.push(data);
    localStorage.setItem("coffee",JSON.stringify(coffee));
    coffeeLen();
}

coffeeLen();

function coffeeLen(){
    let coffee = JSON.parse(localStorage.getItem("coffee"))|| [];

    document.getElementById("coffee_count").innerHTML = `count of coffee :${coffee.length}`;
    console.log(coffee);
}

