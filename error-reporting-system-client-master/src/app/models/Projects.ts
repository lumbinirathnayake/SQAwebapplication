import {User} from './User';

export class Projects {
    public id: number;
    public proName: string;
    public proType: string;
    public proDescription: string;
    public proUsers: User[];
    public proCreatorId: number;
    public proCreatorFName: string;
    public proCreatorLName: string;
    public proLeadId: number;
    public proLeadFName: string;
    public proLeadLName: string;
    public proStartedDate: Date;
    public proEndDate: Date;
    public proCreatedDate: Date;
    public proUpdatedDate: Date;

    constructor(proName: string, proType: string, proDescription: string, proUsers: User[], proCreatorId: number, proCreatorFName: string, proCreatorLName: string, proLeadId: number, proLeadFName: string, proLeadLName: string, proStartedDate: Date, proEndDate: Date, proCreatedDate: Date, proUpdatedDate: Date) {
        this.proName = proName;
        this.proType = proType;
        this.proDescription = proDescription;
        this.proUsers = proUsers;
        this.proCreatorId = proCreatorId;
        this.proCreatorFName = proCreatorFName;
        this.proCreatorLName = proCreatorLName;
        this.proLeadId = proLeadId;
        this.proLeadFName = proLeadFName;
        this.proLeadLName = proLeadLName;
        this.proStartedDate = proStartedDate;
        this.proEndDate = proEndDate;
        this.proCreatedDate = proCreatedDate;
        this.proUpdatedDate = proUpdatedDate;
    }
}
