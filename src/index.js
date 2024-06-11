import './scss/output.css'
import { printTitle, addTaskButton} from './all-tasks'
import { tasksArray } from "./array-modified.js"
import { populateDom } from "./append-all-tasks.js"
import { arrayChecker } from './array-modified.js'

const allTasksButton = document.getElementById('all')
const contentDiv = document.getElementById('content')


allTasksButton.addEventListener('click', () => {
    if (contentDiv.innerHTML !== '') contentDiv.innerHTML = ''
    printTitle()
    addTaskButton()
    arrayChecker()

    const tasks = localStorage.getItem('myArray')
    populateDom(JSON.parse(tasks))   
})



