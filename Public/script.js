carousel = ["./assets/image/chaussettecarousel.jpg", "./assets/image/escaladecarousel.jpg", "./assets/image/servonsupcarousel.jpg"];
carouseltexte = ["<em>Je passe une grande partie de mon temps libre à créer : je couds, je tricote...</em>", "<em>J'aime aussi beaucoup bouger. En ce moment, je fais de l'escalade en blocs & de la musculation à la maison.</em>", "<em>Membre du bureau de l'association Servon sur un plateau, je joue à des jeux de société mais aussi de rôle.</em>"];
carouselalt = ["Une paire de chaussettes tricotées", "Un mur d'escalade en salle", "Le logo de l'association Servon sur un plateau"]
numimage = 1 ; 
function appuieBouton(direction) {
    if (direction == "suivant" ) {
        numimage ++ ; 
        if (numimage >= carousel.length) {numimage = 0 }
        else {}
        document.querySelector("img.carousel").setAttribute("src", carousel[numimage]);
        document.querySelector("p.carousel").innerHTML = carouseltexte[numimage];
        document.querySelector("img.carousel").setAttribute("alt", carouselalt[numimage]);
    }
    else if (direction == "precedent") {
        numimage -- ;
        if (numimage < 0) {numimage = carousel.length -1 }
        else {}
        document.querySelector("img.carousel").setAttribute("src", carousel[numimage])
        document.querySelector("p.carousel").innerHTML = carouseltexte[numimage];
        document.querySelector("img.carousel").setAttribute("alt", carouselalt[numimage]);
    }
    else {}

};
document.querySelector(".prev").addEventListener("click", () => { appuieBouton("precedent")  
});
document.querySelector(".next").addEventListener("click", () => { appuieBouton("suivant")  
});