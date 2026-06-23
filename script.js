
const titres = document.querySelectorAll('#preuve h3');
 
function compter(titre, chiffreFinal, signe, mesure) {
  let chiffreDepare = 0;
  let intervalle = setInterval(function() {
    chiffreDepare = chiffreDepare + Math.ceil(chiffreFinal / 100);
    if (chiffreDepare >= chiffreFinal) {
      chiffreDepare = chiffreFinal;
      clearInterval(intervalle);
    }
    titre.textContent = signe + chiffreDepare.toLocaleString('fr-FR') + mesure;
  }, 10);
}
 
const sectionPreuve = document.getElementById("partenaires");
 
compter(titres[0], 500,    '-', ' T');
compter(titres[1], 200000, '-', ' kg');
compter(titres[2], 158000, '',  '');
compter(titres[3], 204,    '',  ' Magasins agréés');
 
const partenaires = [
  { logo: "./assets/section-partenaires/emmausImg.svg",    nom: "Back Market",  tag: "Reconditionné" },
  { logo: "./assets/section-partenaires/fairephoneImg.svg", nom: "Fairphone",    tag: "Éco-responsable" },
  { logo: "./assets/section-partenaires/ifixitImg.svg",    nom: "Emmaüs",       tag: "Don & réemploi" },
  { logo: "./assets/section-partenaires/loremImg.svg",     nom: "iFixit",       tag: "Réparation" },
  { logo: "./assets/section-partenaires/tmblLogo.svg",     nom: "LCDCycle",     tag: "Pièces détachées" },
];
 
function creerCard(partenaire) {
  const card = document.createElement('div');
  card.classList.add('card-partenaire');
 
  let img = document.createElement('img');
  img.src = partenaire.logo;
  img.classList.add('img-partenaire');
 
  const boite = document.createElement('div');
 
  let titre = document.createElement('h3');
  titre.textContent = partenaire.nom;
 
  let texte = document.createElement('p');
  texte.textContent = partenaire.tag;
 
  boite.appendChild(titre);
  boite.appendChild(texte);
  card.appendChild(img);
  card.appendChild(boite);
 
  return card;
}
 
for (let i = 0; i < partenaires.length; i++) {
  sectionPreuve.appendChild(creerCard(partenaires[i]));
}



 