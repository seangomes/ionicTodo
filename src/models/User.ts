export class User {
  id: string;
  username: string;
  email:string;
  password: string;

  constructor(id:string, username:string, email:string, password:string){
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email
  }
}