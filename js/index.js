'use strict'

const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')

//Nouvelle instance pour la clé 'tasks'

const storage = new ArrayStorage('tasksKey')

//récupération du tableau des tâches
const tasks = storage.list


// Ajout des taches au dom avec un btn de suppression
function showTasks (taskData) {
  //vérification du type string et chaine non-vide
  if (typeof taskData === 'string' && taskData){
    //creation d'une balise li
    const li = document.createElement('li')
    //creation d'un boutton de suppression
    const removebtn = document.createElement('button')
    //ajout du texte de la tache
    li.textContent= taskData
    //ajout du texte du boutton
    removebtn.textContent= 'Remove'

    //event click -> supprimer le noeud parent (li)
    removebtn.addEventListener('click', () => {
      const value = removebtn.parentNode.firstChild.textContent
      storage.remove(value)
     list.removeChild(removebtn.parentNode)
    })

    //link du btn en enfant de li
    li.appendChild(removebtn)
    // injection
    list.insertBefore(li, list.firstChild)

    return true
  }
  return false
}

//affichage
tasks.forEach(task => showTasks(task))

//ajout de taches
function newTask () {
  // -1 = pas de doublon et pas vide
  if (storage.list.indexOf(input.value) === -1 && showTasks(input.value)) {
    storage.set(input.value)
    //vider l'input
    input.value=''
  }
  //garder le focus sur le btn add
  input.focus()
}

add.addEventListener('click', newTask)
input.addEventListener('keydown', (e) =>{
  if (e.key === "Enter"){
    newTask()
  }
})

//vide le UL en entier
clear.addEventListener('click',() => {
  storage.clear()
  list.innerHTML = ''

})

// importation de tâches
load.addEventListener('click', () => {
fetch(url.value)
  .then(response => {
    if (response.ok) {
      return response.json()
    }
    throw new Error(`${response.statusText} (${response.status})`)
  })
  .then (tasks => {
    if (Array.isArray(tasks)){
      tasks.forEach(task => {
        if (storage.list.indexOf(task) === -1 && showTasks(task)) {
          storage.set(task)
        }
      })
        return
    }
    throw new TypeError("la réponse n'est pas un tableau Json")
  })
})
