function summer(){
   
//henter verdier brukeren har skrevet inn

    let tall1 = Number(document.getElementById("tall1").value) 
    let tall2 = Number(document.getElementById("tall2").value) 
    
    
    
    //er for å se om man får inn tallene i consolen
    console.log(tall1, tall2)
   
   //beregner summen av de to tallene
    let sum = tall1 + tall2
   //skriver ut svaret til nettsiden
    document.getElementById("utskrift").innerHTML = `summen er ${sum}`

}



// /*
// kommentar over flere linjer

// */


//ytytyt
//hei
//hei

