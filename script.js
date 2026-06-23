
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
  }, 30);
}
 
const sectionPreuve = document.getElementById('preuve');

const observateur = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      compter(titres[0], 500,    '-', ' T');
      compter(titres[1], 200000, '-', ' kg');
      compter(titres[2], 158000, '',  '');
      compter(titres[3], 204,    '',  ' Magasins agréés');
    }
  });
});                        // ← il manquait cette ligne

observateur.observe(sectionPreuve);   // ← et celle-ci aussi
//  Partenaire qui defile

const sectionPartenaire = document.getElementById("partenaires");
let divPartenaires = document.getElementById("defilement-partenaires");

const partenaires = [
  { logo: "./assets/section-partenaires/logoBlackMarket.png",  nom: "Back Market",  tag: "Reconditionné." },
  { logo: "./assets/section-partenaires/Fairphone-Symbol.png", nom: "Fairphone",    tag: "Éco-responsable." },
  { logo: "./assets/section-partenaires/emmausImg.svg",        nom: "Emmaüs",       tag: "Don & réemploi." },
  { logo: "./assets/section-partenaires/iFixitLogo.webp",      nom: "iFixit",       tag: "Réparation." },
  { logo: "./assets/section-partenaires/recommenceLogo.png",   nom: "Recommence",   tag: "Reconditionné." },
   { logo: "./assets/section-partenaires/bricoPhoneLogo.jpg",   nom: "Brico Phone",   tag: "Piéces détachés." },
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
  texte.classList.add(`texte-partenaire`);
 
  boite.appendChild(titre);
  boite.appendChild(texte);
  card.appendChild(img);
  card.appendChild(boite);

 
 
  return card;
}
 
for (let i = 0; i < partenaires.length; i++) {
  divPartenaires.appendChild(creerCard(partenaires[i]));
}

for (let i = 0; i < partenaires.length; i++) {
  divPartenaires.appendChild(creerCard(partenaires[i]));
}



 // CARROUSEL PARTENAIRES
// const track = document.querySelector('#defilement-partenaires');
let position = 0;

function deplacerCarrousel() {
  position -= 1;

  const gap = 35;
  const largeurTotale = divPartenaires.scrollWidth  / 2 + gap / 2;
  if (Math.abs(position) >= largeurTotale) {
    position = 0;
  }
  divPartenaires.style.transform = 'translateX(' + position + 'px)';
  requestAnimationFrame(deplacerCarrousel);
}

deplacerCarrousel();

const toutesLesSections = document.querySelectorAll('.section-cacher');

const observateurSections = new IntersectionObserver(function(entries) {
  entries.forEach(function(entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add('section-visible');
    } else {
      entry.target.classList.remove('section-visible'); 
    }
  });
});

toutesLesSections.forEach(function(section) {
  observateurSections.observe(section);
});