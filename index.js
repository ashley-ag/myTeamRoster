// The actual app
const fs = require('fs');
const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Define an array that will hold all employee objects (i.e. Manager, Engineer, etc)
const employees = [];

// Show main menu - (i.e. 
const showMenu = () => {
  inquirer.prompt(
  // Select employee type to add
  {
  // Choices: Manager, Engineer, Intern, Quit
  type: 'list', 
  name: 'role',
  message: 'What is the role of this employee?',
  choices: ['Manager', 'Engineer', 'Intern', 'Quit'],
  })
  .then((answer) => {
  // Use switch() for the response
  switch(new Employee) {
  // if 'Manager', call managerPrompt()
    case(Manager):
      managerPrompt();
      break;
  // if 'Engineer', call engineerPrompt()
    case(Engineer):
      engineerPrompt();
      break;
  // if 'Intern', call internPrompt()
    case(Intern):
      internPrompt();
      break;
  // Otherwise, call render() function to generate HTML
    default:
      console.log("double oops");
  }} )
}

const managerPrompt = () => {
  // use inquirer to prompt the following:
inquirer.prompt(
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is the employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email address of the employee?',
  },
  {
    type: 'input',
    name: 'other',
    message: 'What is the office number of the employee?',
  }
)
    // Instantiate a new Manager() object
const newManager = new Manager(answers.name, answers.employeeID, answers.email, answers.other);
    // Add this new Manager object to employees array (via .push())
employees.push(newManager);
    // Call showMenu()
showMenu();
}


const engineerPrompt = () => {
  // use inquirer to prompt the following:
inquirer.prompt(
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is the employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email address of the employee?',
  },
  {
    type: 'input',
    name: 'other',
    message: 'What is the employees github username?',
  }
)
    // Instantiate a new Emgineer() object
    const newEngineer = new Engineer(answers.name, answers.employeeID, answers.email, answers.other)
    // Add this new Enginer object to employees array (via .push())
    employees.push(newEngineer);
    // Call showMenu()
    showMenu();
}

const internPrompt = () => {
  // use inquirer to prompt the following:
inquirer.prompt(
  {
    type: 'input',
    name: 'name',
    message: 'What is the name of the employee?',
  },
  {
    type: 'input',
    name: 'employeeID',
    message: 'What is the employee ID?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is the email address of the employee?',
  },
  {
    type: 'input',
    name: 'other',
    message: 'What is the name of the school that the employee goes to?',
  }
)
   // Instantiate a new Emgineer() object
   const newIntern = new Intern(answers.name, answers.employeeID, answers.email, answers.other);

  // Add this new Enginer object to employees array (via .push())
  employees.push(newIntern);
  // Call showMenu()
  showMenu();
}

const htmlContent = () => 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
<style>
    .jumbotron {
        background-color: blue;
        color: white;
        text-align: center;
    }
</style>
</head>
<body>
    <div class="jumbotron">
        <h1 class="display-4">My Team</h1>
        <hr>
      </div>
    <div id="employeesCards"></div>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.6.0/dist/umd/popper.min.js" integrity="sha384-KsvD1yqQ1/1+IA7gi3P0tyJcT3vR+NdBTt13hSJ2lnve8agRGXTTyNaBYmCR/Nwi" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/js/bootstrap.min.js" integrity="sha384-nsg8ua9HAw1y0W1btsyWgBklPnCUAFLuTMS2G72MMONqmOymq585AcH49TLBQObG" crossorigin="anonymous"></script>
</body>
</html>`
    
const render = () => {
  fs.writeFile('.dist/team.html', htmlContent(), (err) => {
    if (err){
        console.log("oops");
    } else {
        console.log("success");
    }
});
  // Iterate through each employee in the employees[] array
  for (i = 0; i < employees.length; i++) {
    const cardContent = () => {
      `<div class="card" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${answers.name}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${answers.role}</h6>
        <p class="card-text">${answers.employeeID}</p>
        <p class="card-text">${answers.email}</p>
        <p class="card-text">${answers.other}</p>
      </div>
    </div>`
    }

  document.getElementById('employeeCards').appendChild(cardContent);
  // construct the 'Card' (lookup Cards in Bootstrap)
  // Use the properties in each employee object to be displayed in the card
  // When done, write the output to ./dist/team.html
  }
}


showMenu();