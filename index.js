// Packages required 
const { get } = require('http');
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Constant with parameters to input information from the user answers into the template literal
const generateHTML = ({manName, engName, intName, manId, engId, intId, manEmail, engEmail, intEmail, number, github, school}) =>

//Template literal for HTML to be created 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Team</title>
</head>
<body>
    <header>My Team</header>
    
<main>
    <h2>${manName}</h2>
    <h2>Manager</h2>
    <h4>Employee ID: ${manId} </h4>
    <h4>Email address: ${manEmail}</h4>
    <h4>Office Number: ${number}</h4>

    <h2>${engName}</h2>
    <h2>Engineer</h2>
    <h4>Employee ID: ${engId} </h4>
    <h4>Email address: ${engEmail}</h4>
    <h4>Githublink: ${github}</h4>

    <h2>${intName}</h2>
    <h2>Intern</h2>
    <h4>Employee ID: ${intId} </h4>
    <h4>Email address: ${intEmail}</h4>
    <h4>School: ${school}</h4>
</main>
</body>
</html>`;

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
        name: 'manName',
        message: 'Enter your new manager name:',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 2,
        name: 'engName',
        message: 'Enter your new engineer name:',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 2,
        name: 'intName',
        message: 'Enter you new intern name:',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'manId',
        message: 'Enter your new manager id: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'engId',
        message: 'Enter your new engineer id: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 3,
        name: 'intId',
        message: 'Enter your new intern id: ',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'manEmail',
        message: 'Enter your new manager email: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'engEmail',
        message: 'Enter your new engineer email: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type: 'input',
        prefix: 4,
        name: 'intEmail',
        message: 'Enter your new intern email: ',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type:'input',
        prefix: 5,
        name: 'number',
        message: 'Enter your new manager office number: ',
        when: (answers) => answers.role === 'Manager'
    },
    {
        type:'input',
        prefix: 5,
        name: 'github',
        message: 'Enter your new engineer GitHub link: ',
        when: (answers) => answers.role === 'Engineer'
    },
    {
        type:'input',
        prefix: 5,
        name: 'school',
        message: 'Enter your new interns school: ',
        when: (answers) => answers.role === 'Intern'
    },
])

.then((answers) => {
    const htmlContent = generateHTML(answers);
    fs.writeFile('index.html', htmlContent, (err) =>
    err ? console.log(err) : console.log('Successfully created your team website!')
    );
});