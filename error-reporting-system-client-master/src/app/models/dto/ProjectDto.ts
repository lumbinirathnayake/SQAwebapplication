import {User} from '../User';

export class ProjectDto {
    public id: number;
    public proName: string;
    public proType: string;
    public proDescription: string;
    public proUsers: User[];
    public proCreator: User;
    public proLead: User;
    public proStartedDate: Date;
    public proEndDate: Date;
    public proCreatedDate: Date;
    public proUpdatedDate: Date;

    constructor(id: number, proName: string, proType: string, proDescription: string, proUsers: User[], proCreator: User, proLead: User, proStartedDate: Date, proEndDate: Date, proCreatedDate: Date, proUpdatedDate: Date) {
        this.id = id;
        this.proName = proName;
        this.proType = proType;
        this.proDescription = proDescription;
        this.proUsers = proUsers;
        this.proCreator = proCreator;
        this.proLead = proLead;
        this.proStartedDate = proStartedDate;
        this.proEndDate = proEndDate;
        this.proCreatedDate = proCreatedDate;
        this.proUpdatedDate = proUpdatedDate;
    }
}
