// Packages required 
const { get } = require('http');
const inquirer = require('inquirer');
const fs = require('fs').promises;

// Constant with parameters to input information from the user answers into the template literal
const generateHTML = ({names, role, id, email, number, github, school}) =>

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
    constructor (names, id, email, role){
        this.names = names;
        this.id = id;
        this.email = email;
        this.role = role;
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
        return 'Employee'
    }
};

class Manager extends Employee{
    constructor (names, id, email, role, number){
        super(names, id, email, role);
        this.number = number;
    }

    getNumber(){
        inquirer.prompt[(
            {
                type:'input',
                prefix: 4,
                name: 'number',
                description: 'Enter your teammates office number'
            }
        )]
    }

    getRole(){
        return 'Manager'
    }
}

class Engineer extends Employee{
    constructor (names, id, email, role, github){
        super(names, id, email, role);
        this.github = github;
    }
        getGithub(){
        inquirer.prompt[(
            {
                type:'input',
                prefix: 5,
                name: 'github',
                description: 'Enter your teammates GitHub link:'
            }
        )]
    }
    getRole(){
        return 'Engineer'
    }
}

class Intern extends Employee{
    constructor (names, id, email, role, school){
        super(names, id, email, role);
        this.school = school;
    }
        getGithub(){
        inquirer.prompt[(
            {
                type:'input',
                prefix: 5,
                name: 'school',
                description: 'Enter your interns school:'
            }
        )]
    }

    getRole(){
        return 'Intern'
    }
}

console.log(getname())