//DECLARATING THE REFERENCE TO THE VALUES IN HTML
const URL = window.location.search;
const URLDATA = new URLSearchParams(URL);

const name_output = document.getElementById("fullname_id");
const email_output = document.getElementById("email_id");
const number_output = document.getElementById("number_id");
const team_output = document.getElementById("team_id")

//DECLARATING THE REFERENCE THE STORED VALUES IN STORAGE
const name1 = sessionStorage.getItem("name");
const email1 = sessionStorage.getItem("email");
const number1 = sessionStorage.getItem("tel");
const team1 = sessionStorage.getItem("desiredTeam");


//OUTPUTS THE STORED VALUES INTO THE HTML
name_output.innerHTML= name1
email_output.innerHTML = email1
number_output.innerHTML = number1
team_output.innerHTML = team1