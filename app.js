const GithubForm = document.querySelector("#myForm");
const UserInput = document.querySelector("#GithubUser");

/* api se data ko show krwan keliye kuch element ko select kiya hai */
const GithubImage = document.querySelector("#UserImage1");
const GithubImage2 = document.querySelector("#UserImage2"); 
const GithubName = document.querySelector("#GithubName");
const GithubUserName = document.querySelector("#UserName");
const GithubJoin = document.querySelector("#GithubJoin");
const UserBio = document.querySelector("#UserBio");
const userCity = document.querySelector("#UserCity");
const User_Repository = document.querySelector("#repo");
const User_Followers = document.querySelector("#followers");
const User_Following = document.querySelector("#following");
const User_Github_Url = document.querySelector("#Github-URl");


GithubName.innerText = `The Octocat`; 
GithubUserName.innerText = `@octocat`;
UserBio.innerText = `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec odio. Quisque volutpat mattis eros.`;
User_Repository.innerText = `47`;
User_Followers.innerText = '3938';
User_Following.innerText = '23';
userCity.innerText = 'San Francisco, US'
User_Github_Url.innerText = 'github.com/octocat'

const formController = async (event) => {

try{
event.preventDefault(); // is se page refresh nhi hota

const GithubUserInput = UserInput.value;
// console.log(GithubUserInput);
GithubImage2.style.display = 'none'; 
GithubName.innerText = 'loading...'; 
GithubUserName.innerText = 'loading...';
UserBio.innerText = 'No Bio';
User_Repository.innerText = 'loading...';
User_Followers.innerText = '';
User_Following.innerText = '';
userCity.innerText = 'loading...';
User_Github_Url.innerText = 'loading...';

const api1 = await fetch(`https://api.github.com/users/${GithubUserInput}`);
const response = await api1.json(); // api ko object me convert kiya hai
console.log(response);

//api se data ko show kiya hai
GithubImage.src = response.avatar_url;
GithubName.innerText = response.name;
GithubUserName.innerText = `@${response.login}`;
if (response.bio) { // agr user ne github me bio nahi dala hoa tw else chalega 
  UserBio.innerText = response.bio;
}else{
  UserBio.innerText = "No Bio";
}
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
GithubForm.reset(); // is se input khali ho jaega
}catch(error){
   swal({
      icon:"error",
      title: "Error",
      text: error?.response?.message || "User Not Found",
   });
}

}
// formController();

GithubForm.addEventListener("submit", formController);