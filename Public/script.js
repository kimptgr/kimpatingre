carousel = [
  "./assets/image/chaussettecarousel.jpg",
  "./assets/image/escaladecarousel.jpg",
  "./assets/image/servonsupcarousel.jpg",
];
carouseltexte = [
  "<em>J'aime aussi créer : je couds, je tricote...</em>",
  "<em>Quand je ne suis pas derrière l'ordinateur j'aime bouger. Je fais de l'escalade de voie en club et du bloc.</em>",
  "<em>Membre du bureau de l'association Servon sur un plateau, je joue à des jeux de société mais aussi de rôle.</em>",
];
carouselalt = [
  "Une paire de chaussettes tricotées",
  "Un mur d'escalade en salle",
  "Le logo de l'association Servon sur un plateau",
];
numimage = 1;
function appuieBouton(direction) {
  if (direction == "suivant") {
    numimage++;
    if (numimage >= carousel.length) {
      numimage = 0;
    } else {
    }
    document
      .querySelector("img.carousel")
      .setAttribute("src", carousel[numimage]);
    document.querySelector("p.carousel").innerHTML = carouseltexte[numimage];
    document
      .querySelector("img.carousel")
      .setAttribute("alt", carouselalt[numimage]);
  } else if (direction == "precedent") {
    numimage--;
    if (numimage < 0) {
      numimage = carousel.length - 1;
    } else {
    }
    document
      .querySelector("img.carousel")
      .setAttribute("src", carousel[numimage]);
    document.querySelector("p.carousel").innerHTML = carouseltexte[numimage];
    document
      .querySelector("img.carousel")
      .setAttribute("alt", carouselalt[numimage]);
  } else {
  }
}
document.querySelector(".prev").addEventListener("click", () => {
  appuieBouton("precedent");
});
document.querySelector(".next").addEventListener("click", () => {
  appuieBouton("suivant");
});

//FOOTER ANNEE DYNAMIQUE
let currentYear = new Date().getFullYear();
document.querySelector("footer p").textContent = `${currentYear}, Kim Patingre`;

//hover revision d2wm
let imageRevisionD2WM = document.querySelector("#revisiond2wm");
imageRevisionD2WM.addEventListener("mouseenter", (e) =>
  changeSourceImage(e, "./assets/image/revisiond2wmapprendre.jpg")
);
imageRevisionD2WM.addEventListener("mouseleave", (e) =>
  changeSourceImage(e, "./assets/image/revisiond2wmqcm.jpg")
);

//hover ovs
let imageOvs = document.querySelector("#imageOvs");
imageOvs.addEventListener("mouseenter", (e) =>
  changeSourceImage(e, "./assets/image/ovsNewTrip.png")
);
imageOvs.addEventListener("mouseleave", (e) =>
  changeSourceImage(e, "./assets/image/ovsIndex.png")
);

//hover encheres
let imageEnchere = document.querySelector("#imageEnchere");
imageEnchere.addEventListener("mouseenter", (e) =>
  changeSourceImage(e, "./assets/image/encheresProfil.png")
);
imageEnchere.addEventListener("mouseleave", (e) =>
  changeSourceImage(e, "./assets/image/encheresIndex.png")
);

//hover learn the mouse
let imageLearnTheMouse = document.querySelector("#imageltm");
imageLearnTheMouse.addEventListener("mouseenter", (e) =>
  changeSourceImage(e, "./assets/image/ltmEx1.png")
);
imageLearnTheMouse.addEventListener("mouseleave", (e) =>
  changeSourceImage(e, "./assets/image/ltmExmix.png")
);

function changeSourceImage(e, chemin) {
  e.target.setAttribute("src", chemin);
}
