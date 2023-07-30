const today = new Date();
// using Date method to get todays date
const thisYear = today.getFullYear();
// get the year
const footer = document.querySelector('footer');
// creates the foother 
const copyright = document.createElement('p');
// creates the paragrah in the footer
const userName = document.querySelector("#name");
// selects the id='name'
var myName = userName.textContent;
// selects the text within the <p> element
copyright.innerHTML = "\u00A9 " + myName + " " + thisYear;
// adds text of copyright symbol, name, and year
footer.appendChild(copyright)
// appends the copyright.innerHTML to the footer
var skills = ["HTML", "CSS", "JavaScript", "React", "node.js"];
// creates an array called skills
const skillsSection = document.querySelector("#skills");
// selects the id = 'skills' element
var skillsList = document.querySelector("ul");
// selects the <ul> element within the skillsSection
for (var i = 0; i < skills.length; i++){
    const skill = document.createElement("li");
    skill.innerText = skills[i];
    skillsList.appendChild(skill);
}
// loops through the skills array create the <li> for skills

/* I know that this might be overkill on commenting but I am trying to establish good habits
by forcing myself to comment everything, because I have a very bad habit of forgetting to comment at all*/
