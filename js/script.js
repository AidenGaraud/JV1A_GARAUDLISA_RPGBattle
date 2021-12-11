var perso1 = {nom:"Perso1", vie:100, attaque:10, derniereAction:null, nameId:"characters1"};
var perso2 = {nom:"Perso2", vie:100, attaque:10, derniereAction:null, nameId:"characters2"};
var perso3 = {nom:"Perso3", vie:100, attaque:10, derniereAction:null, nameId:"characters3"};
var perso4 = {nom:"Perso4", vie: 100, attaque:10, derniereAction:null, nameId:"characters4"};

var monstre1 = {nom:"Monstre1", vie:100, attaque:10};
var monstre2 = {nom:"Monstre2", vie:100, attaque:10};
var monstre3 = {nom:"Monstre3", vie:100, attaque:10};

var tour = 0;
var dialogue = document.getElementById("choix");
var boite1 = document.getElementById("team1");
var boite2 = document.getElementById("team2");
var boite3 = document.getElementById("team3");
var boite4 = document.getElementById("team4");

var boiteMonstre1 = document.getElementById("Info1");
var boiteMonstre2 = document.getElementById("Info2");
var boiteMonstre3 = document.getElementById("Info3");

var listeMonstre = [monstre1,monstre2,monstre3];
var listePerso = [perso1,perso2,perso3,perso4]; 

var cible = listeMonstre[0];
var compteurPersonnage = 0;
                    
ciblage1 = document.getElementsByClassName("monster1");
ciblage1.onclick = function(){
  cible = listeMonstre[0];                    
}
ciblage2 = document.getElementsByClassName("monster2");
ciblage2.onclick = function(){
  cible = listeMonstre[1];                  
}
ciblage3 = document.getElementsByClassName("monster3");
ciblage3.onclick = function(){
  cible = listeMonstre[2];                    
}
 
                 
function attaque (){
  deplacement();
  console.log(cible)
  cible.vie -=listePerso[compteurPersonnage].attaque;
  console.log(cible.vie);
  if (cible.vie <= 0 && cible==listeMonstre[0]) {
    document.getElementsByClassName("monster1").style.visibility="hidden";
  }
  if (cible.vie <= 0 && cible==listeMonstre[1]) {
    document.getElementsByClassName("monster2").style.visibility="hidden";
  }
  if (cible.vie <= 0 && cible==listeMonstre[2]) {
    document.getElementsByClassName("monster2").style.visibility="hidden";
  }
  listePerso[compteurPersonnage].derniereAction = "attaque";
  prochainPersonnage();
  update();                 
}

function defense (){
  listePerso[compteurPersonnage].derniereAction = "défense";
  prochainPersonnage();                 
}
                   
function prochainPersonnage (){
  compteurPersonnage++;
  console.log(compteurPersonnage);
  if (compteurPersonnage==4) {
    attaqueEnnemis();
    compteurPersonnage=0;              
  }
  while (compteurPersonnage < 4){
      if (listePerso[compteurPersonnage].vie > 0){
          break;
      }
      else {
          compteurPersonnage++;
      }
  }
}
                    
function attaqueEnnemis() {
  for (var i = 0; i < listeMonstre.length; i++) {
    if (listeMonstre[i].vie > 0) {
      var personnagesVivants = [];
      for (var j = 0; j < listePerso.length; j++) {
        if (listePerso[j].vie > 0) {
          personnagesVivants.push(listePerso[j]);
        }
      }
      personnagesVivants[Math.floor(Math.random() * personnagesVivants.length)].vie -= listeMonstre[i].attaque;
    }
  }
}

function deplacement(){
  var deplacementdroite = 200
  document.getElementById(listePerso[compteurPersonnage].nameId).style.right += deplacementdroite;
  setTimeout(function() { document.getElementById(listePerso[compteurPersonnage].nameId).style.right -= deplacementdroite; }, 1000);
}
                    
function update() {
  dialogue.innerHTML = "Au tour de " + listePerso[compteurPersonnage].nom;
  boite1.innerHTML = "Perso1 _______ " + perso1.vie + " hp mana 100";
  boite2.innerHTML = "Perso2 _______ " + perso2.vie + " hp mana 100";                  
  boite3.innerHTML = "Perso3 _______ " + perso3.vie + " hp mana 100"; 
  boite4.innerHTML = "Perso4 _______ " + perso4.vie + " hp mana 100";
  boiteMonstre1.innerHTML = monstre1.vie + "hp";  
  boiteMonstre2.innerHTML = monstre2.vie + "hp"; 
  boiteMonstre3.innerHTML = monstre3.vie + "hp";                 
}
                    
update();