const today = new Date();
// using Date method to get todays date
const thisYear = today.getFullYear();
// get the year
const footer = document.querySelector('footer');
// creates the footer 
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
for (var i = 0; i < skills.length; i++) {
  const skill = document.createElement("li");
  skill.innerText = skills[i];
  skillsList.appendChild(skill);
}
// loops through the skills array create the <li> for skills

/* I know that this might be overkill on commenting but I am trying to establish good habits
by forcing myself to comment everything, because I have a very bad habit of forgetting to comment at all*/

const messageForm = document.forms.leave_message;

// event listener for the submit button
messageForm.addEventListener('submit', function (event) {
  // prevent default submission
  event.preventDefault();
  // store input values into variables
  const usersNameInput = event.target.usersName.value;
  // select the first letter of userNameInput ant capitalize it
  const capitalizedUserName = usersNameInput.charAt(0).toUpperCase() + usersNameInput.slice(1);
  // stores value of userEmailInput
  const usersEmailInput = event.target.usersEmail.value;
  // stores value of userMessageInput
  const usersMessageInput = event.target.usersMessage.value;
  // console log each input field
  console.log('Users Name:', capitalizedUserName);
  console.log('Users Email', usersEmailInput);
  console.log('Users Message', usersMessageInput);

  // stores the id="messages"
  const messageSection = document.querySelector("#messages");
  // stores messageSection unorderd list
  const messageList = messageSection.querySelector('ul');
  // creates new list item variable
  const newMessage = document.createElement('li');

  // changes innerHTML of newMessages to display capitalizedUserName as a link followed by usersMessageInput and the remove button
  newMessage.innerHTML = `<a href="mailto:${usersEmailInput}">${capitalizedUserName}</a> wrote:<br><br> <span>${usersMessageInput}</span>`;
  // creates the remove button
  const removeButton = document.createElement('button');
  // sets intterText
  removeButton.innerText = ("Remove");
  // sets attribute type
  removeButton.setAttribute('type', 'button');
  // adds 10px margin for spacing
  removeButton.style.marginLeft = '10px';
  // assign id to remove buttons
  removeButton.id = 'removeButton';

  // creates event listener for the remove button
  removeButton.addEventListener('click', function () {
    // Get the parent node (list item) of the cliked remove button
    const listItem = removeButton.parentNode;
    // remove the list item (message) from the list
    listItem.remove();
    console.log(listItem.textContent, "You removed this item");
  });
  // appends the remve button the the end of newMessage
  newMessage.appendChild(removeButton);
  // appends the list item/new message to the list
  messageList.appendChild(newMessage);
  // resets the input fields after submit event
  messageForm.reset();
});

// Create a Fetch API request to get GitHub repositories
fetch('https://api.github.com/users/shnfox/repos')
  .then(response => response.json())
  .then(repositories => {
    // Select the $projects section by id and store it in a variable named projectSection
    const projectSection = document.querySelector('#projects');
    // Query the projectSection to find the <ul> element and store it in a variable named projectList
    const projectList = projectSection.querySelector('ul');
    // Create a for loop to iterate over your repositories Array
    for (let i = 0; i < repositories.length; i++) {
      // Create a new list item (li) element and store it in a variable named project
      const project = document.createElement('li');
      // create new anchor element and store it in a variable named link
      const link = document.createElement('a');
      // set the href attribute of the link to the html_url property of the current repository
      link.href = repositories[i].html_url;
      // set the inner text of the link to the current Array element's name
      link.innerHTML = repositories[i].name;
      // append the link to the project element
      project.appendChild(link);
      // Append the project element to the projectList element
      projectList.appendChild(project);
    }
  })
  .catch(error => {
    console.error('GitHub API request failed with error:', error);
  })