import { sunIcon, moonIcon } from './icons.js'

export default function initLightMode() {
    const btnMode = document.getElementById('userBtnMode')

    btnMode.addEventListener('click', handleClick)
    window.addEventListener('load', handlePageLoad)
}

function handleClick() {
    const iconContainer = document.getElementById('icon-container')
    const nameMode = document.getElementById('nameMode')
    const bodyMode = document.querySelector('body')

    bodyMode.classList.toggle('darkMode')
    if (nameMode.textContent === 'DARK') {
        nameMode.textContent = 'LIGHT'
        iconContainer.innerHTML = sunIcon
        localStorage.setItem('colorTheme', 'dark')
        return
    }

    nameMode.textContent = 'DARK'
    iconContainer.innerHTML = moonIcon
    localStorage.setItem('colorTheme', 'light')
}

function handlePageLoad() {
    const storedValue = localStorage.getItem('colorTheme')
    const bodyMode = document.querySelector('body')
    const iconContainer = document.getElementById('icon-container')
    const nameMode = document.getElementById('nameMode')

    if (storedValue === 'dark') {
        bodyMode.classList.add('darkMode')
        nameMode.textContent = 'LIGHT'
        iconContainer.innerHTML = sunIcon
    }
    console.log(storedValue)
}
