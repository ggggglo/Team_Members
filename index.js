// Packages required 
const { getDiffieHellman } = require('crypto');
const inquirer = require('inquirer');
const fs = require('fs').promises

// Constant with parameters to input information from the user answers into the template literal
const generateHTML = ({names, role, id, email, number, test, github, school}) =>

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
    <h2>${names}</h2>
    <h2>${role}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${number}</h4>

    <h2>${names}}</h2>
    <h2>${role}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${github}</h4>

    <h2>${names}}</h2>
    <h2>${role}</h2>
    <h4>Employee ID: ${id} </h4>
    <h4>Email address: ${email}</h4>
    <h4>Office Number: ${school}</h4>
</main>
</body>
</html>`;

//Employee parent class
class Employee {
    constructor (names, id, email){
        this.names = names;
        this.id = id;
        this.email = email;
    }

    getName(){
        inquirer.prompt([
            {
                type: 'input',
                prefix: 1,
                name: 'names',
                description: 'Enter your teammates name:',
            }
        ])
    };

    getID(){
        inquirer.prompt([
            {
                type: 'input',
                prefix: 2,
                name: 'id',
                description: 'Enter your teammates id: ',
            }
        ])
    };

    getEmail(){
        inquirer.prompt([
            {
                type: 'input',
                prefix: 3,
                name: 'email',
                description: 'Enter your teammates email: ',
            }
        ])
    }

    getRole(){
        console.log('Employee')
    }
};

class Manager extends Employee{
    constructor ()

}