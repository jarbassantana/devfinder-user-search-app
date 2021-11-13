export default function initLightMode() {
    const btnMode = document.getElementById('userBtnMode')
    const nameMode = document.getElementById('nameMode')

    function handleClick(event) {
        const body = document.body
        body.classList.toggle('darkMode')
        if (nameMode.innerHTML === 'DARK') {
            document.getElementById('iconSVG').src = '/icon-sun.a1aadbed.svg'
            nameMode.innerHTML = 'LIGHT'
        } else if (nameMode.innerHTML === 'LIGHT') {
            document.getElementById('iconSVG').src = '/icon-moon.a96a287b.svg'
            nameMode.innerHTML = 'DARK'
        }
    }
    console.log()

    btnMode.addEventListener('click', handleClick)
}
