// Packages required 
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Constant with parameters to input information from the user answers into the template literal

const generateHTML = ({names, id, role, email, last}) =>

//Template literal for HTML to be created 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://use.typekit.net/hqf7xng.css">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.3.1/dist/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="./style.css">
    <title>My Team</title>
</head>
<body>
    <header>You've added a new ${role} to your team!</header>
    
<main>
<div class="container">
  <div class="row">
    <div class="col-sm">
    </div>
    <div class="col-sm">
        <div class="col employee">
        <h4 class="name">${names}</h2>
        <h4 class="role">Employee role: ${role}</h2>
        <h4 class="id">Employee ID: ${id}</h4>
        <h4 class="email">Email: <a href=mailto:${email}>${email}<a></h4>
        <h4 class="last"><a href="${last}">${last}</a></h4>
    </div>
    <div class="col-sm">
    </div>
  </div>
</div>
</main>
</body>
</html>`;

//Get user input to create HTML
inquirer.prompt([
    {
        type:'list',
        prefix: 1,
        name: 'role',
        message: 'Select your new teammates role: ',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        prefix: 2,
        name: 'names',
        message: 'Enter your new manager name:',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 2,
        name: 'names',
        message: 'Enter your new engineer name:',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 2,
        name: 'names',
        message: 'Enter you new intern name:',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'id',
        message: 'Enter your new manager id: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'id',
        message: 'Enter your new engineer id: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'id',
        message: 'Enter your new intern id: ',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'email',
        message: 'Enter your new manager email: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'email',
        message: 'Enter your new engineer email: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'email',
        message: 'Enter your new intern email: ',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type:'input',
        prefix: 5,
        name: 'last',
        message: 'Enter your new manager office number: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type:'input',
        prefix: 5,
        name: 'last',
        message: 'Enter your new engineer GitHub link: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type:'input',
        prefix: 5,
        name: 'last',
        message: 'Enter your new interns school: ',
        when: (answers) => answers.role === 'Intern'
    },
])

.then((answers) => {
    const htmlContent = generateHTML(answers);
    fs.appendFile('./dist/index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your team website!')
    );
});