import { sunIcon, moonIcon } from './icons.js'

export default function initLightMode() {
    const btnMode = document.getElementById('userBtnMode')

    btnMode.addEventListener('click', handleClick)
}

function handleClick() {
    const iconContainer = document.getElementById('icon-container')
    const nameMode = document.getElementById('nameMode')
    const bodyMode = document.querySelector('body')
    bodyMode.classList.toggle('darkMode')
    if (nameMode.textContent === 'DARK') {
        nameMode.textContent = 'LIGHT'
        iconContainer.innerHTML = sunIcon
        return
    }

    nameMode.textContent = 'DARK'
    iconContainer.innerHTML = moonIcon
}
