function summer() {
    let tall1 = Number(document.getElementById("tall1").value) // skriver Number foran for å si at det skal være tall
    let tall2 = Number (document.getElementById("tall2").value)
    let svar = pluss(tall1, tall2) //her roper jeg ut på den andre funskjonen jeg laget nede som heter pluss
    document.getElementById("tekstensomkommer").innerHTML = svar

}

//en egen funskjon som ligger sammen de to tallene
function pluss(tall1, tall2) {
    let sum = tall1 + tall2 // her sier jeg: " la summen være det man skirver i boks 1 pluss det man skriver i boks 2"
    return sum //tar og returnerer summen og sender tilbake til sum?
}