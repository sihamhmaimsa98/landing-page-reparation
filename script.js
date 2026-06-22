//  le decompte dans la section preuve

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
  }, 50);
}

compter(titres[0], 500,    '-', ' T');
compter(titres[1], 200000, '-', ' kg');
compter(titres[2], 158000, '',  '');
compter(titres[3], 204,    '',  ' Magasins agréés');


// cree des card qui defile pour nos partenaire 
// recuperer la section cibler 
 const sectionPreuve =document.getElementById("partenaires");

//  tableau des données

const partenaires = [
  { logo: "trouver img", nom: "Back Market",  tag: "Reconditionné" },
  { logo: "trouver img", nom: "Fairphone",    tag: "Éco-responsable" },
  { logo: "trouver img", nom: "Emmaüs",       tag: "Don & réemploi" },
  { logo: "trouver img", nom: "iFixit",       tag: "Réparation" },
  { logo: "trouver img", nom: "LCDCycle",     tag: "Pièces détachées" },
  { logo: "trouver img", nom: "Recommerce",   tag: "Reconditionné" },
  { logo: "trouver img", nom: "TMB",          tag: "Réparation" },
];

// cree la fonction

function creerCard(partenaire) {
  const card = document.createElement('div');
  card.classList.add(`card-partenaire`)
  
  let img = document.createElement(`img`);
  img.src = partenaire.logo;
  img.classList.add(`img-partenaire`);

  const boite = document.createElement('div');
  
  
  let titre = document.createElement(`h3`);
  titre.textContent = partenaire.nom;
  
  let texte = document.createElement(`p`);
  texte.textContent =partenaire.tag;

  boite.appendChild(titre);
  boite.appendChild(texte);

  card.appendChild(img);
  card.appendChild(boite);

  
  return card;
}

for (let i = 0; i < partenaires.length; i++) {
  sectionPreuve.appendChild(creerCard(partenaires[i]));
}