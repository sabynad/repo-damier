//permet de voir si js est bien en accord avc le html
console.log("script chargé!");
//ajout des lettres sur la nouvelle colonne
let arrayLetters = ["A", "B", "C","D","E","F","G","H"];


// Je crée une fonction maTable que je relie à la balise "table" en html
let maTable = document.createElement("table");
// J'indique que maTable est l'enfant de ma balise html "body"
document.body.appendChild(maTable);

// Je fais ma première boucle 
// J'indique que mon nombre de lignes commence par 1 puis puis s'acrémente jusqu'a 8 et s'arrête à 8
for (let nbRows = 0; nbRows <= 8; nbRows++) {
     // Je crée la fonction uneRow que je relie à la balise "tr"
    let uneRow = document.createElement("tr");
     // J'indique qu'il s'agit d'un enfant de la balise maTable
    maTable.appendChild(uneRow);

    // Je fais une nouvelle boucle où je traite cette fois-ci des cellules, qui commencent aussi par 1 et s'arrêtent à 8
    for (let nbcells = 0; nbcells <= 8; nbcells++) {
        // Je crée la fonction uneCellule que je relie à la balise html "td"
        let uneCellule = document.createElement("td");
        // J'indique que uneCellule est enfant de uneRow
         uneRow.appendChild(uneCellule);

        // je crée une condition pour colorer le damier en fonction des chiffres paire et impaire je fais un modulo % qui calcule la ligne par 2 exemple ligne 8 modulo de 2 = 0 car pas de decimale sur un chiffre paire si exemple modulo % de 7 resulatat avec decimale donc egale a 1
        if ((nbcells + nbRows) % 2 === 0) {
         uneCellule.style.backgroundColor = "pink"
        }
         else {
          uneCellule.style.backgroundColor = "white"
          }

         // ajouter ranger alphabet
         if (nbRows == 0 && nbcells >= 1){  
            uneCellule.textContent = arrayLetters[nbcells-1]
            uneCellule.style.border = "none"; 
         }

         // ajouter ranger nombre
         if (nbRows >=0 && nbcells == 0) {
            uneCellule.style.border = "none";
            uneCellule.textContent = nbRows;
         } 

         if (nbcells == 0 || nbRows == 0) {
            uneCellule.style.backgroundColor = "white"
         }
                 
      }   
}
   
    