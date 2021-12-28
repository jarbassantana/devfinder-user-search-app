import { sunIcon, moonIcon } from './icons.js'

export default function initLightMode() {
    const btnMode = document.getElementById('userBtnMode')

    btnMode.addEventListener('click', handleClick)
    window.addEventListener('load', handlePageLoad)
}

function handleClick() {
    const nameMode = document.getElementById('nameMode')

    nameMode.textContent === 'DARK' 
        ? handleStateChange('LIGTH', sunIcon)
        : handleStateChange('DARK', moonIcon)
}

function handlePageLoad() {
    const storedValue = localStorage.getItem('colorTheme')
    
    storedValue === 'dark' && handleStateChange('LIGHT', sunIcon)
}

function handleStateChange(nameText, svgIcon) {
    const iconContainer = document.getElementById('icon-container')
    const nameMode = document.getElementById('nameMode')
    const bodyMode = document.querySelector('body')
    
    bodyMode.classList.toggle('darkMode')
    nameMode.textContent = nameText
    iconContainer.innerHTML = svgIcon

    localStorage.setItem('colorTheme', nameText === 'DARK' ? 'light' : 'dark' )
}
