function start() {
    let tall1 = document.getElementById("tall1").value
    let tall2 = document.getElementById("tall2").value
    let resultat = skjekktall(tall1, tall2)
    document.getElementById("utskrift").innerHTML= resultat

}

function skjekktall(verdi1, verdi2) {
    let svar = ""
    if (verdi1>verdi2) {
        svar = `tallet ${verdi1} er større enn ${verdi2} ` //
        return svar
    }
        else if (verdi1<verdi2) {
            svar = `tallet ${verdi1} er mindre enn ${verdi2} ` //
        return svar
        }

        else {
            svar = `tallet ${verdi1} er lik ${verdi2} ` //
            return svar
        }

} 