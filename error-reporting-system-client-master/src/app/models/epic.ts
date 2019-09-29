export class Epic {
    id: number;
    proId: number;
    epicName: string;
    epicDescription: string;
    epicSummery: string;
    epicAssigneeId: number;
    epicAssigneeFName: string;
    epicAssigneeLName: string;
    epicStatus: string;
    epicStartDate: Date;
    epicEndDate: Date;
    epicCreatedDate: Date;
    epicUpdatedDate: Date;

    constructor(proId: number, epicName: string, epicDescription: string, epicSummery: string, epicAssigneeId: number, epicAssigneeFName: string, epicAssigneeLName: string, epicStatus: string, epicStartDate: Date, epicEndDate: Date, epicCreatedDate: Date, epicUpdatedDate: Date) {
        this.proId = proId;
        this.epicName = epicName;
        this.epicDescription = epicDescription;
        this.epicSummery = epicSummery;
        this.epicAssigneeId = epicAssigneeId;
        this.epicAssigneeFName = epicAssigneeFName;
        this.epicAssigneeLName = epicAssigneeLName;
        this.epicStatus = epicStatus;
        this.epicStartDate = epicStartDate;
        this.epicEndDate = epicEndDate;
        this.epicCreatedDate = epicCreatedDate;
        this.epicUpdatedDate = epicUpdatedDate;
    }
}
