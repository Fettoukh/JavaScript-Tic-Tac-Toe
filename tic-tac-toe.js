function estValide(button) {
  return button.innerHTML.length == 0; // return true if empty
}

function setSymbol(btn, symbole) {
  btn.innerHTML = symbole;
}

function rechercherVainqueur(pions, joueurs, tour) {
  if (pions[0].innerHTML == joueurs[tour] &&
    pions[1].innerHTML == joueurs[tour] &&
    pions[2].innerHTML == joueurs[tour]) {
    pions[0].style.backgroundColor = "#5CB85C";
    pions[1].style.backgroundColor = "#5CB85C";
    pions[2].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[3].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour]) {
    pions[3].style.backgroundColor = "#5CB85C";
    pions[4].style.backgroundColor = "#5CB85C";
    pions[5].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[6].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]) {
    pions[6].style.backgroundColor = "#5CB85C";
    pions[7].style.backgroundColor = "#5CB85C";
    pions[8].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[0].innerHTML == joueurs[tour] &&
    pions[3].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]) {
    pions[0].style.backgroundColor = "#5CB85C";
    pions[3].style.backgroundColor = "#5CB85C";
    pions[6].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[1].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[7].innerHTML == joueurs[tour]) {
    pions[1].style.backgroundColor = "#5CB85C";
    pions[4].style.backgroundColor = "#5CB85C";
    pions[7].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[2].innerHTML == joueurs[tour] &&
    pions[5].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]) {
    pions[2].style.backgroundColor = "#5CB85C";
    pions[5].style.backgroundColor = "#5CB85C";
    pions[8].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[0].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[8].innerHTML == joueurs[tour]) {
    pions[0].style.backgroundColor = "#5CB85C";
    pions[4].style.backgroundColor = "#5CB85C";
    pions[8].style.backgroundColor = "#5CB85C";
    return true;
  }

  if (pions[2].innerHTML == joueurs[tour] &&
    pions[4].innerHTML == joueurs[tour] &&
    pions[6].innerHTML == joueurs[tour]) {
    pions[2].style.backgroundColor = "#5CB85C";
    pions[4].style.backgroundColor = "#5CB85C";
    pions[6].style.backgroundColor = "#5CB85C";
    return true;
  }
}

function matchNul(pions) {
  for (var i = 0, len = pions.length; i < len; i++) {
    if (pions[i].innerHTML.length == 0)
      return false;
  }

  return true;
}

function setMessage(element, message) {
  element.innerHTML = message
}

function main() {
  var pions = document.querySelectorAll("#Jeu button");
  var joueurs = ['X', 'O'];
  var tour = 0;
  var jeuEstFini = false;
  var StatutJeu = document.querySelector("#StatutJeu");
  setMessage(StatutJeu, "Le jeu peut commencer ! <br /> Joueur " + joueurs[tour] + " c'est votre tour.");
  for (var i = 0, len = pions.length; i < len; i++) {
    pions[i].addEventListener("click", function () {
      if (jeuEstFini)
        return;

      if (!estValide(this)) {
        setMessage(StatutJeu, "Case occup??e ! <br />Joueur " + joueurs[tour] + " c'est toujours ?? vous !");

      }
      else {
        setSymbol(this, joueurs[tour]);
        jeuEstFini = rechercherVainqueur(pions, joueurs, tour);

        if (jeuEstFini) {
          setMessage(StatutJeu, "Le joueur " + joueurs[tour] + " a gagn?? ! <br /> <a href=\"./index.html\">Rejouer</a>");
          return;
        }

        if (matchNul(pions)) {
          setMessage(StatutJeu, "Match Nul ! <br/> <a href=\"./index.html\">Rejouer</a>");
          return;
        }

        tour++;
        tour = tour % 2;
        setMessage(StatutJeu, "Joueur " + joueurs[tour] + " c'est ?? vous !");
      }
    });
  }
}

main();
