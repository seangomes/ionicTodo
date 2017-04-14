export class User {
  id: string;
  username: string;
  email:string;
  password: string;
  gender: string;

  constructor(id:string, username:string, email:string, password:string, gender: string){
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email,
    this.gender = gender
  }
}