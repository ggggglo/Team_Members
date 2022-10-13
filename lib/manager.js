class Manager extends Employee{
    constructor (names, id, email, role, number){
        super(names, id, email, role);
        this.number = number;
    }

    getNumber(){

    };

    getRole(){
        return 'Manager'
    };
}