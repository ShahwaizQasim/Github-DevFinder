const GithubForm = document.querySelector("#myForm");
const UserInput = document.querySelector("#GithubUser");
const GithubImage = document.querySelector("#UserImage");
const GithubName = document.querySelector("#GithubName");
const GithubUserName = document.querySelector("#UserName");
const UserBio = document.querySelector("#UserBio");

const formController = async (event) => {
event.preventDefault();

const GithubUserInput = UserInput.value;
// console.log(GithubUserInput);

const api1 = await fetch(`https://api.github.com/users/${GithubUserInput}`);
const response = await api1.json();

GithubImage.src = response.avatar_url;
GithubUserName.innerText = response.name;
UserBio.innerText = response.bio;
//console.log(response);
}
// formController();

GithubForm.addEventListener("submit", formController);

