export class Users {
    public id: string;
    public name: string;
    public status: string;

    constructor(id: string, name: string, status: string){
        this.id = id;
        this.name = name;
        this.status = status;
    }
}