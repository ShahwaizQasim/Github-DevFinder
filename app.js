const GithubForm = document.querySelector("#myForm");
const UserInput = document.querySelector("#GithubUser");
const GithubImage = document.querySelector("#UserImage");
const GithubName = document.querySelector("#GithubName");
const GithubUserName = document.querySelector("#UserName");
const GithubJoin = document.querySelector("GithubJoin");
const UserBio = document.querySelector("#UserBio");
const userCity = document.querySelector("#UserCity");

const formController = async (event) => {
event.preventDefault();

const GithubUserInput = UserInput.value;
// console.log(GithubUserInput);

const api1 = await fetch(`https://api.github.com/users/${GithubUserInput}`);
const response = await api1.json();
console.log(response);

GithubImage.src = response.avatar_url;
GithubName.innerText = response.name;
GithubUserName.innerText = `@${response.login}`;
UserBio.innerText = response.bio;
}
// formController();

GithubForm.addEventListener("submit", formController);

