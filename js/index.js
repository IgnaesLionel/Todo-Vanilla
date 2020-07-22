const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')

const tasks = ['Faire la vaisselle', 'Ranger le salon', 'Ranger la chambre']


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
     list.removeChild(removebtn.parentNode)
    })

    //link du btn en enfant de li
    li.appendChild(removebtn)
    // injection
    list.insertBefore(li, list.firstChild)
  }
}

//affichage
tasks.forEach(task => showTasks(task))


function reset () { for (let i = 0; i < tasks.length; i++){
    showTasks(tasks[i])

  }}

//ajout de taches
function newTask () {
  //garder le focus sur le btn add
  input.focus()
  tasks.push(input.value)
  reset()
}


add.addEventListener('click', newTask)
input.addEventListener('keydown', (e) =>{
  if (e.key === "Enter"){
    newTask()
  }
})

//vide le UL en entier
clear.addEventListener('click',() => {
  list.innerHTML = ''
})

// importation de tâches
load.addEventListener('click', () => {

})
