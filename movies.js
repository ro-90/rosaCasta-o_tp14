
let peliculas=["turnoDedia","30nochesConMiex","Bestia","elMonte","TopGunMaverick","Elvis","Thor: amor y trueno"];



function destacarPelicula(peliculas, peliculaDestacada) {
    
    let peliculaDestacadaMayus = peliculaDestacada.toUpperCase();
  
   
    let index = peliculas.indexOf(peliculaDestacada);
    
   
    if (index !== -1) {
      peliculas.splice(index, 1);  
      peliculas.unshift(peliculaDestacadaMayus);  
    } 
    
  
    return peliculas;
  }
  
 
  peliculas = destacarPelicula(peliculas, 'Thor: amor y trueno');
  
 console.log(peliculas);


 let peliculasAestrenar=["counter-Strike","NOP","Vertigo","nick","avatar"]
   
    function unir(peliculas,peliculasAestrenar){
         return peliculas.concat(peliculasAestrenar);
       

    } console.log (unir( peliculas,peliculasAestrenar));


  

  