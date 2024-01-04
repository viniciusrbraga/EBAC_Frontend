document.addEventListener('DOMContentLoaded', function () {
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const avatarElement = document.querySelector('#avatar');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    fetch('https://api.github.com/users/viniciusrbraga')
        .then(function (res) {
            return res.json();
        })
        .then(function (json) {
            avatarElement.src = json.avatar_url;
            nameElement.innerText = json.name;
            usernameElement.innerText = json.login;
            reposElement.innerText = json.public_repos;
            followersElement.innerText = json.followers;
            followingElement.innerText = json.following;
            linkElement.href = json.html_url;
        })
    .catch(function (erro) {
        alert("Ocorreu um erro ao tentar buscar os dados em github.com Tente novamente mais tarde.")
        avatarElement.src = "https://via.placeholder.com/180x180";
        nameElement.innerText = "";
        usernameElement.innerText = "";
        reposElement.innerText = "";
        followersElement.innerText = "";
        followingElement.innerText = "";
        linkElement.href = "";
    })
})