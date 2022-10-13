class Engineer extends Employee{
    constructor (names, id, email, role, github){
        super(names, id, email, role);
        this.github = github;
    }
        getGithub(){

    };

    getRole(){
        return 'Engineer'
    };
}