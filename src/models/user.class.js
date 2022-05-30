import { ROLES } from "./roles.enum";

export class User {
    username = '';
    email = '';
    password = '';
    rol = ROLES.USER


    constructor(username, email, password, rol) {
        this.username = username;
        this.email = email;
        this.password = password;
        this.rol = rol;
    }
}