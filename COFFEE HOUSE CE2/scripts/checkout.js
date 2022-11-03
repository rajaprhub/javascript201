
document.querySelector("form").addEventListener("submit", ordercoffee);
function  ordercoffee(event){
    event.preventDefault()
  
    event.preventDefault()
    
    alert("Your order is accepted");

    setTimeout(()=>{
    alert("Your order is being Prepared");
     setTimeout(() => {
       alert(" Your order is being packed");

       setTimeout(() => {
         alert("Order out for delivery");

          setTimeout(() => {
            alert("Order delivered");
            
          }, 3000);

       }, 8000);
      

     }, 10000);
     
    },12000)
   
}