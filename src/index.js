import './scss/output.css'
import { printTitle, addTaskButton} from './all-tasks'
import { tasksArray } from "./array-modified.js"
import { populateDom } from "./append-all-tasks.js"

const allTasksButton = document.getElementById('all')
const contentDiv = document.getElementById('content')


allTasksButton.addEventListener('click', () => {
    // error to be fixed in if statment
    if (contentDiv.innerHTML !== '') {
        contentDiv.removeChild()
        contentDiv.removeChild()
    }
    printTitle()
    addTaskButton()
    checkIfStorage()
})


function checkIfStorage () {
    if (localStorage.getItem('myArray')) populateDom()
}
