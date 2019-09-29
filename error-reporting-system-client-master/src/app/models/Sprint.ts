export class Sprint {
    id: number;
    sprintName: string;
    sprintSummery: string;
    sprintDescription: string;
    sprintProjectId: number;
    sprintCreatorId: number;
    sprintCreatorFName: string;
    sprintCreatorLName: string;
    sprintStatus: string;
    sprintStartDate: Date;
    sprintEndDate: Date;
    sprintCreatedDate: Date;
    sprintUpdatedDate: Date;

    constructor(sprintName: string, sprintDescription: string, sprintSummery: string, sprintProjectId: number, sprintCreatorId: number, sprintCreatorFName: string, sprintCreatorLName: string, sprintStatus: string, sprintStartDate: Date, sprintEndDate: Date, sprintCreatedDate: Date, sprintUpdatedDate: Date) {
        this.sprintName = sprintName;
        this.sprintDescription = sprintDescription;
        this.sprintSummery = sprintSummery;
        this.sprintProjectId = sprintProjectId;
        this.sprintCreatorId = sprintCreatorId;
        this.sprintCreatorFName = sprintCreatorFName;
        this.sprintCreatorLName = sprintCreatorLName;
        this.sprintStatus = sprintStatus;
        this.sprintStartDate = sprintStartDate;
        this.sprintEndDate = sprintEndDate;
        this.sprintCreatedDate = sprintCreatedDate;
        this.sprintUpdatedDate = sprintUpdatedDate;
    }
}
