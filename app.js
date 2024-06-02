const GithubForm = document.querySelector("#myForm");
const GithubImage = document.querySelector("#UserImage");
const GithubUserName = document.querySelector("#UserName");
const UserBio = document.querySelector("#UserBio");

const formController = async () => {
const api1 = await fetch("https://api.github.com/users/mkaif5");
const response = await api1.json();

GithubImage.src = response.avatar_url;
GithubUserName.innerText = response.name;
UserBio.innerText = response.bio;
console.log(response);
}
formController();

GithubForm.addEventListener("submit", formController)

