// Pour l'exercice 2
let pContent = "Il est possible de passer des parametres dans la function utilisé dans l'écouteur d'événement !"

// > Event Target
// ### 3. Créer un programme qui au hasard choisis parmis les propriétés suivants et l'applique aux éléments quand on clique sur le button GO : 
// - border: 1px solid gold;
// - background-color: blue;
// - background-color: red;
// - border: 5px dotted gold;

let input = document.querySelector('input');
let changeRandomColor = (target) => {
    let property = [
        "border: 1px solid gold",
        "background-color: blue",
        "background-color: red",
        "border: 5px dotted gold"
    ];
    let randomNumber = Math.round(Math.random() * property.length);
    return target.style.cssText = property[randomNumber];
}
// ### 1. Créer un programme qui au clique d'un des éléments de la div 
//l'élément s'affiche dans la console, en utilisant une boucle pour appliquer un écouteur d'événement sur chaque élément !
let elements = document.querySelectorAll('h1, h2, p')
elements.forEach((elem,i) => {
    elem.addEventListener('click', () => {
        console.log(`Voici mon ${elem.localName}`);
        // ### 2. Créer un programme qui au double click d'un élément son texte est en majuscule
    });
    elem.addEventListener('dblclick', () => {
        elem.style.textTransform = 'uppercase'
    })
    input.addEventListener('click', () => {changeRandomColor(elem)})
})


