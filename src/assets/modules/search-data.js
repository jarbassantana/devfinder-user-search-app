import dayjs from 'dayjs'

export default function initSearchData() {
    const btnSearch = document.getElementById('btnSearch')
    btnSearch.addEventListener('click', searchHandleClick)
}

function searchHandleClick(event) {
    event.preventDefault()
    const user = document.getElementById('userSearch')
    handleUserDOM(user.value)
    changeHref(user.value)
}

async function handleUserDOM(username) {
    const userData = await fetchUser(username)
    if (!userData.username && !userData.name) return

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
    document.getElementById(
        'userDateJoined'
    ).textContent = `Joined ${userData.joinedAt}`
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
        location: data.location || 'Not Available',
        twitter: data.twitter_username || 'Not Available',
        blog: data.blog || 'Not Available',
        company: data.company || 'Not Available',
        joinedAt: formatDate(data.created_at)
    }
    data.message === 'Not Found' && alert('User not found')

    return formattedData
}

function formatDate(ISO) {
    return dayjs(ISO).format('D MMM YYYY')
}

document.querySelector('form').addEventListener('submit', () => {
    btnSearch.addEventListener(searchHandleClick)
})
