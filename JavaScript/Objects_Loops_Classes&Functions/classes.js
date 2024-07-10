
//To make properties protected, Use # before the property name. #etunimet.


class Henkilo {
  constructor(etunimet, sukunimi) {
    this.etunimet = etunimet;
    this.sukunimi = sukunimi;
    this.kutsumanimi = undefined;
  }

  getKokoNimi() {
    return `${this.etunimet} ${this.sukunimi}`;
  }

  toString() {
    return `Henkilo: ${this.getKokoNimi()} (kutsumanimi: ${this.kutsumanimi})`;
  }
}

class Urheilija extends Henkilo {
  constructor(etunimet, sukunimi) {
    super(etunimet, sukunimi);
    this._kuvaLinkki = undefined;
    this._omapaino = undefined;
    this._laji = undefined;
    this._saavutukset = undefined;
  }
  // Get-funktiot
  get kuvaLinkki() {
    return this._kuvaLinkki;
  }

  get omapaino() {
    return this._omapaino;
  }

  get laji() {
    return this._laji;
  }

  get saavutukset() {
    return this._saavutukset;
  }

  // Set-funktiot
  set kuvaLinkki(uusiKuvaLinkki) {
    this._kuvaLinkki = uusiKuvaLinkki;
  }

  set omapaino(uusiOmapaino) {
    this._omapaino = uusiOmapaino;
  }

  set laji(uusiLaji) {
    this._laji = uusiLaji;
  }

  set saavutukset(uudetSaavutukset) {
    this._saavutukset = uudetSaavutukset;
  }

  toString() {
    return `${super.toString()} (laji: ${this.laji}, saavutukset: ${
      this.saavutukset
    })`;
  }
}

let henkilo1 = new Henkilo("arben", "grepi");
console.log(henkilo1);

let urheilija1 = new Urheilija("Matti, Jarmo", "Meikäläinen");
console.log(urheilija1);

urheilija1.kuvaLinkki = "url_osoite";
urheilija1.kutsumanimi = "Matti";

console.log(urheilija1.toString());
console.log(urheilija1.kuvaLinkki);

