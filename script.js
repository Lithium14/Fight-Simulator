// On défini la classe du personnage
class Personnage {
  constructor(pseudo, classe, sante, attaque) {
    this.pseudo = pseudo,
    this.classe = classe,
    this.sante = sante,
    this.attaque = attaque,
    this.niveau = 1
  }

  // Méthode
    // Faire évoluer le perso
  evoluer() {
    this.niveau += 1;
    console.log(this.pseudo + ' passe au niveau ' + this.niveau + ' !')
  }

  // Evaluer la santé
  verifierSante() {
    if(this.sante <= 0) {
      this.sante == 0,
      console.log(this.pseudo + ' a perdu !');
    } else {
      this.sante = this.sante
    }
  }

  //Getters Afficher les Infos
  get informations() {
    return this.pseudo + ' (' + this.classe  + ') a ' + this.sante + ' points de vie et est au niveau ' + this.niveau + '.'
  }
}

// Classe Magicien hérite du Personnage

class Magicien extends Personnage {
  constructor(pseudo) {
    super(pseudo, 'magicien', 170, 90),
    this.pseudo = pseudo
  }

  //Methode
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' en lançant un sort ' + this.attaque + ' dégâts.' );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + ' attaque avec son coup spécial puissance des arcanes ' + personnage.pseudo + ' '+ this.attaque * 5 +' dégâts.');
    this.evoluer();
    personnage.verifierSante();
  }
}

// Classe Guerrier hérite du Personnage
class Guerrier extends Personnage {
  constructor(pseudo) {
    super(pseudo, 'guerrier', 350, 50),
    this.pseudo = pseudo
  }

  //Methode
  attaquer(personnage) {
    personnage.sante -= this.attaque;
    console.log(this.pseudo + ' attaque ' + personnage.pseudo + ' avec son épée ' + this.attaque + ' dégâts.' );
    this.evoluer();
    personnage.verifierSante();
  }

  coupSpecial(personnage) {
    personnage.sante -= this.attaque * 5;
    console.log(this.pseudo + ' attaque avec son coup spécial hache de guerre' + personnage.pseudo + ' ' +this.attaque * 5 +' dégâts.');
    this.evoluer();
    personnage.verifierSante();
  }
}

var naruto = new Magicien('Naruto');
var pain    = new Guerrier('Pain');
console.log(pain.informations);
console.log(naruto.informations);
naruto.attaquer(pain);
console.log(pain.informations);
pain.attaquer(naruto);
console.log(naruto.informations);
naruto.coupSpecial(pain);
