// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

let data = JSON.parse(localStorage.getItem('amount')) ;
document.getElementById("wallet").innerText = data ;


let movie_list = [];
let id ;
 // var url = `http://www.omdbapi.com/?i=tt3896198&apikey=45fd81a8&t=${search})`

   async function search_movies(){
     let query  = document.getElementById("search").value ;
     
      try{
        let res = await fetch(`http://www.omdbapi.com/?i=tt3896198&apikey=45fd81a8&s=${query}`)
        let data = await res.json();

     if(data.Response == "True"){
         console.log(data)
         movie_list =  data.Search;
         movieData(data.Search) ;
      }
      else{
        console.log("Error")
      }

      }
      catch(err) {
        console.log(err);
      }
   

    }

 function movieData(disp){

      let container = document.getElementById("movies") ;
      container.innerHTML = null;
  //  disp.forEach( function ({Poster,Title},index){
    disp.forEach( function (elem,index){

       let divb = document.createElement('div');
       divb.setAttribute("class", "movie_tab")

       let img = document.createElement('img')
       img.src = elem.Poster
       let title = document.createElement('h5')
       title.innerText =  `Movie Name:${elem.Title }`

       var bookbtn = document.createElement("button");
       bookbtn.setAttribute = ("class","book_now")
       bookbtn.innerText = "Book Now" ;
       bookbtn.addEventListener("click",()=>{
          bookMovie(index) ;
       })

        divb.append(img,title,bookbtn)
        container.append(divb)
    }) ;

  } ;
   
 
  function bookMovie(index){
       localStorage.setItem("movie",JSON.stringify(movie_list[index])) ;
       window.location.href = "checkout.html" ;
  }

    // let debounce = (delay)=>{
    //   if(id){
    //     clearTimeout(id) ;
    //   }
    //   id = setTimeout( ()=>{
    //     search_movies()
    //   },delay)
    // };


 


function debounce(){


  let search = document.querySelector("#search").value;
  clearTimeout(id)
  

  
  function showconsole(){
    console.log(search)
    search_movies()
  }
   
 id= setTimeout(()=>{
       
 
  showconsole()
         
    
     

  },1000)

}




