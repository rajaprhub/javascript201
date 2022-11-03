// Each ticket will cost 100 Rupees
// If wallet amount is insufficient show alert "Insufficient Balance!";
// Else show "Booking successfull!" and adjust the wallet amount in real time

let data = JSON.parse(localStorage.getItem('amount')) ;
document.getElementById("wallet").innerText = data ;


let movieData = ()=>{
      let divb = document.getElementById("movie") ;
      divb.setAttribute("class", "movie_tab")
      let {Poster,Title}= JSON.parse(localStorage.getItem("movie"));

       let img = document.createElement('img')
       img.src = Poster
       let title = document.createElement('h2')
       title.innerText = Title

      divb.append(title,img);
};
movieData();


let confirm = ()=>{
    let number = document.getElementById("number_of_seats").value ;
    let total = Number(number) * 100 ;
    let wallet = JSON.parse(localStorage.getItem('amount')) ;

    if( total > wallet){
        alert("Insufficient Balance!") ;
    }
    else{
          let balance =  wallet - total ;
          localStorage.setItem("amount",JSON.stringify(balance)) ;
             document.getElementById("wallet").innerText = balance ;
             alert("Booking successful!") ;
    }

}