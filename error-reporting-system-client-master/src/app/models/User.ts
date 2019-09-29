import {Projects} from './Projects';

export class User {
    public id: number;
    public userEnmpId: string;
    public userEMail: string;
    public userFname: string;
    public userLName: string;
    public userType: string;
    public userAddress: string;
    public userPassword: string;
    public userProjects: Projects[];
    public userUsername: string;
    public userCreatedDate: Date;
    public userUpdatedDate: Date;
    public token?: string;

    constructor(userEnmpId: string, userEMail: string, userFname: string, userLName: string, userType: string, userAddress: string, userPassword: string, userProjects: Projects[], userUsername: string, userCreatedDate: Date, userUpdatedDate: Date) {
        this.userEnmpId = userEnmpId;
        this.userEMail = userEMail;
        this.userFname = userFname;
        this.userLName = userLName;
        this.userType = userType;
        this.userAddress = userAddress;
        this.userPassword = userPassword;
        this.userProjects = userProjects;
        this.userUsername = userUsername;
        this.userCreatedDate = userCreatedDate;
        this.userUpdatedDate = userUpdatedDate;
    }
}
