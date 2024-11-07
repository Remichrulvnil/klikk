function skjekkalder() {

    let alder = Number(document.getElementById("tall1").value) 

    console.log(tall1)

    if (alder < 13) {
      document.getElementById("utskrift").innerHTML= "Du er et barn"  //her skjekker man under 13
    } 

    else if (alder <20) {
        document.getElementById("utskrift").innerHTML= "Du er tenåring" // her skjekker man mellom 13-20 siden jeg skrev else if.
    }

    else if (alder <67) {
        document.getElementById("utskrift").innerHTML= "Du er voksen" // her skjekker man mellom 67-20 siden else if
    }
    

    else {
        document.getElementById("utskrift").innerHTML= "Du er pensjonist"   //den siste blir det resterende, 67 eller høyere.
    }
    
}

