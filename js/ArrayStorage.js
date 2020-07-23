'use strict'

// Stockage local des tâches
class ArrayStorage {
  constructor(name) {
    this.name = name
    this.list = this.get()
  }

  // récupération du tableau en local ou par défault le créer
  // avec une clef (name)
  get (){
    //si pas de clef, en creer une, et change le format en string
    if(!localStorage.getItem(this.name)) {
      localStorage.setItem(this.name, '[]')
    } return JSON.parse(localStorage.getItem(this.name))
  }
  //ajout d'une valeur dans le tableau
  set (value){
    this.list.push(value)
    localStorage.setItem(this.name, JSON.stringify(this.list))

  }
  //retirer une valeur dans le tableau
  remove(value){
    const index = this.list.indexOf(value)
    this.list.splice(index, 1)
    localStorage.setItem(this.name, JSON.stringify(this.list))
  }
  //vider le tableau
  clear() {
    localStorage.removeItem(this.name)
  }
}
