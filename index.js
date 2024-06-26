function analyzeSentence() {
    const sentence = prompt("Entrez une phrase se terminant par un point: ");
    let length = 0;
    let wordCount = 0;
    let vowelCount = 0;
    let inWord = false;
    
    // Fonction pour vérifier si un caractère est une voyelle
    function isVowel(char) {
        return 'aeiouAEIOU'.includes(char);
    }

    for (let i = 0; i < sentence.length; i++) {
        const char = sentence[i];
        
        if (char === '.') {
            break;
        }
        
        length++;
        
        if (char === ' ') {
            if (inWord) {
                wordCount++;
                inWord = false;
            }
        } else {
            inWord = true;
            if (isVowel(char)) {
                vowelCount++;
            }
        }
    }
    
    // Ajouter le dernier mot si la phrase ne se termine pas par un espace
    if (inWord) {
        wordCount++;
    }

    console.log("Longueur de la phrase:", length);
    console.log("Nombre de mots dans la phrase:", wordCount);
    console.log("Nombre de voyelles dans la phrase:", vowelCount);
}

analyzeSentence();
