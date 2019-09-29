import {User} from '../User';

export class SprintDto {
    id: number;
    sprintName: string;
    sprintSummery: string;
    sprintDescription: string;
    sprintProjectId: number;
    sprintCreator: User;
    sprintStatus: string;
    sprintStartDate: Date;
    sprintEndDate: Date;
    sprintCreatedDate: Date;
    sprintUpdatedDate: Date;

    constructor(id: number, sprintName: string, sprintSummery: string, sprintDescription: string, sprintProjectId: number, sprintCreator: User, sprintStatus: string, sprintStartDate: Date, sprintEndDate: Date, sprintCreatedDate: Date, sprintUpdatedDate: Date) {
        this.id = id;
        this.sprintName = sprintName;
        this.sprintSummery = sprintSummery;
        this.sprintDescription = sprintDescription;
        this.sprintProjectId = sprintProjectId;
        this.sprintCreator = sprintCreator;
        this.sprintStatus = sprintStatus;
        this.sprintStartDate = sprintStartDate;
        this.sprintEndDate = sprintEndDate;
        this.sprintCreatedDate = sprintCreatedDate;
        this.sprintUpdatedDate = sprintUpdatedDate;
    }
}
