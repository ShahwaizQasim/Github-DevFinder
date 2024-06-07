const GithubForm = document.querySelector("#myForm");
const UserInput = document.querySelector("#GithubUser");
const GithubImage = document.querySelector("#UserImage");
const GithubName = document.querySelector("#GithubName");
const GithubUserName = document.querySelector("#UserName");
const GithubJoin = document.querySelector("#GithubJoin");
const UserBio = document.querySelector("#UserBio");
const userCity = document.querySelector("#UserCity");
const User_Repository = document.querySelector("#repo");
const User_Followers = document.querySelector("#followers");
const User_Following = document.querySelector("#following");
const User_Github_Url = document.querySelector("#Github-URl");

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
User_Repository.innerText = response.public_repos;
User_Followers.innerText = response.followers;
User_Following.innerText = response.following;
userCity.innerText = response.location;
User_Github_Url.innerText = response.html_url

// User_Joined_Github Date
   let date = response.created_at.replaceAll("-"," ").slice(0,10);
   //console.log(date);
   let monthName = date.slice(5,7);
   let monthStr = ["","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
   let month = monthStr[monthName];
  // console.log(month);
   let theDate = `${date.slice(8,10)} ${month} ${date.slice(0,4)}`;
  // console.log(theDate);

GithubJoin.innerText = `Joined ${theDate}`;


}
// formController();

GithubForm.addEventListener("submit", formController);

