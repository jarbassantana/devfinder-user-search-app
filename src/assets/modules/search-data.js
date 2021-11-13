export default function initSearchData() {}

const user = document.getElementById('userSearch')
const btnSearch = document.getElementById('btnSearch')

function searchHandleClick(event) {
    event.preventDefault()
    const data = user.value
    searchData(data)
}

function searchData(data) {
    const url = `https://api.github.com/users/${data}`
    const urlProfile = `https://github.com/${data}`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            userName.textContent = data.name
            userProfile.textContent = data.login
            userProfileImg.src = data.avatar_url
            userBio.textContent = data.bio
            userNumberRepos.textContent = data.public_repos
            userNumberFollowers.textContent = data.followers
            userNumberFollowing.textContent = data.following
            document.getElementById('userHref').href = urlProfile
            console.log(data)
        })
}

btnSearch.addEventListener('click', searchHandleClick)

console.log(btnSearch)
// const userURL = elementoSelecionado.valorDoInput

// const url = `https://api.github.com/${userURL}`
