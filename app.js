const GithubForm = document.querySelector("#myForm");
const GithubImage = document.querySelector("#UserImage");
const GithubUserName = document.querySelector("#UserName");
const UserBio = document.querySelector("#UserBio");

const formController = async () => {
const api1 = await fetch("https://api.github.com/users/shehza-d");
const response = await api1.json();

GithubImage.setAttribute("src", response.avatar_url);
GithubUserName.innerText = response.bio;
console.log(response);
}
formController();

GithubForm.addEventListener("submit", formController)

