const list = document.getElementById('list')
const input = document.getElementById('input')
const add = document.getElementById('add')
const clear = document.getElementById('clear')
const url = document.getElementById('url')
const load = document.getElementById('load')

const tasks = ['Faire la vaisselle', 'Ranger le salon']

const a = document.createElement('a')
a.href = 'test.html'
a.textContent = 'coucou'

const actions = document.getElementsByClassName('actions')[0]

actions.appendChild(a)

console.log (actions)
