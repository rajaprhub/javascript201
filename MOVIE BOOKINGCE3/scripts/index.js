// Store the wallet amount to your local storage with key "amount"


if( !localStorage.getItem("amount") ){
     // localStorage.setItem("amount"),JSON.stringify((0));
     document.getElementById("wallet").innerText = `${0} + Rs` ;
}
else{
     let data = JSON.parse(localStorage.getItem('amount')) ;
     console.log("new dat",data)
     document.getElementById("wallet").innerText = data ;
 }

 function addToWallet(){ 

      let amount  =   document.getElementById("amount").value ;
      let data    =   JSON.parse(localStorage.getItem('amount')) ;

          let newamount = Number(data)+ Number(amount);
           console.log(newamount)

      document.getElementById("wallet").innerText = newamount ;
    localStorage.setItem("amount",JSON.stringify(newamount));
       
 }
