import './scss/output.css'
import { printTitle, addTaskButton} from './all-tasks'

const tasksArray = []

const allTasksButton = document.getElementById('all')
const contentDiv = document.getElementById('content')


allTasksButton.addEventListener('click', () => {
    if (contentDiv.innerHTML !== '') {
        contentDiv.removeChild()
        contentDiv.removeChild()
    }
    printTitle()
    addTaskButton()
})


export {tasksArray}
