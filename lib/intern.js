class Intern extends Employee{
    constructor (names, id, email, role, school){
        super(names, id, email, role);
        this.school = school;
    }
        getGithub(){
    }

    getRole(){
        return 'Intern'
    }
}