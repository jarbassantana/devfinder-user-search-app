export default function initSearchData() {}

import dayjs from 'dayjs'
console.log(dayjs('2019-06-06'))

const btnSearch = document.getElementById('btnSearch')

function searchHandleClick(event) {
    event.preventDefault()
    const user = document.getElementById('userSearch')
    handleUserDOM(user.value)
    changeHref(user.value)
}

async function handleUserDOM(username) {
    const userData = await fetchUser(username)

    document.getElementById('userName').textContent = userData.name
    document.getElementById('userProfile').textContent = userData.username
    document.getElementById('userProfileImg').src = userData.avatar
    document.getElementById('userBio').textContent = userData.bio
    document.getElementById('userNumberRepos').textContent = userData.repos
    document.getElementById('userNumberFollowers').textContent =
        userData.followers
    document.getElementById('userNumberFollowing').textContent =
        userData.following
    document.getElementById('userLocation').textContent = userData.location

    document.getElementById('userLink').textContent = userData.blog
    document.getElementById('userCompany').textContent = userData.company
    console.log(userData)
}

function changeHref(username) {
    const urlProfile = `https://github.com/${username}`
    document.getElementById('userHref').href = urlProfile
}

async function fetchUser(username) {
    const response = await fetch(`https://api.github.com/users/${username}`)
    const data = await response.json()
    const formattedData = {
        avatar: data.avatar_url,
        username: data.login,
        name: data.name,
        bio: data.bio,
        repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        location: data.location,
        twitter: data.twitter_username,
        blog: data.blog,
        company: data.company,
        joinedAt: formatDate(data.created_at)
    }
    console.log(data.message)
    return formattedData
}

function formatDate(ISO) {
    const formattedDate = ISO
    return formattedDate
}

document.querySelector('form').addEventListener('submit', () => {
    btnSearch.addEventListener(searchHandleClick)
})