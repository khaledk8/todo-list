

export function printTitle () {

    const titleH = document.createElement('h1')
    const contentDiv = document.getElementById('content')


    titleH.textContent = 'All Tasks'
    contentDiv.appendChild(titleH)

}

// storageArray JSON



export function addTaskButton () {
    const addSvg = `<svg width="40px" height="40px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill-rule="evenodd" clip-rule="evenodd" d="M11.25 12.75V18H12.75V12.75H18V11.25H12.75V6H11.25V11.25H6V12.75H11.25Z" fill="#080341"></path> </g></svg>`
    const contentDiv = document.getElementById('content')
    const container = document.createElement('div')
    const buttonDiv = document.createElement('div')
    const buttonDivText = document.createElement('p')
    buttonDivText.textContent = "Add Task"
    contentDiv.appendChild(container)
    container.appendChild(buttonDiv)
    buttonDiv.innerHTML = `${addSvg}`
    buttonDiv.appendChild(buttonDivText)

    buttonDiv.classList.add('button-div')

}


