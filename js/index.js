const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')

const tasks = ['Faire la vaisselle', 'Ranger le salon', 'Ranger la chambre']

for (let i = 0; i < tasks.length; i++){
  //vérification du type string et chaine non-vide
  if (typeof tasks[i] === 'string' && tasks[i]){
    //creation balise li
    const li = document.createElement('li')
    //creation d'un boutton
    const removebtn = document.createElement('button')

    li.textContent= tasks[i]
    removebtn.textContent= 'Remove'
    li.appendChild(removebtn)
    // injection
    list.insertBefore(li, list.firstChild)


  }
}

function hello(name, ...lastname) {
  return console.log(`Salut ${name} ${lastname}`)

}

hello("jean", "dujardin", "test1")
hello("jean", "dujardin", "test1","test1","test1","test1")
