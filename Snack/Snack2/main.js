// TODO: l'utente inserisce due parole in successione, con due prompt Il software stampa prima la parola più corta, poi la parola più lunga.


 let earlyWord = prompt("Choose your first word")
 console.log(earlyWord)
 alert("Your first word is " + earlyWord)

 let laterWord = prompt("Choose your second word")
 console.log(laterWord)
 alert("Your second word is " + laterWord)

 if (earlyWord.length < laterWord.length) {
    console.log(earlyWord + " is shorter than " + laterWord)
    alert( earlyWord + " is shorter than " + laterWord)
 }
    else if (earlyWord.length > laterWord.length) {
        console.log(laterWord  + " is shorter than " + earlyWord)
        alert( laterWord  + " is shorter than " + earlyWord)
    }
    else (earlyWord.length === laterWord.length) 
        console.log ("Both words are the same length")
        alert("Both words are the same length")