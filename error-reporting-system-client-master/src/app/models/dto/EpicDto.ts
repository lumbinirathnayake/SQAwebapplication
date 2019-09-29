import {User} from '../User';

export class EpicDto {
    id: number;
    proId: number;
    epicName: string;
    epicDescription: string;
    epicSummery: string;
    epicAssignee: User;
    epicStatus: string;
    epicStartDate: Date;
    epicEndDate: Date;
    epicCreatedDate: Date;
    epicUpdatedDate: Date;

    constructor(id: number, proId: number, epicName: string, epicDescription: string, epicSummery: string, epicAssignee: User, epicStatus: string, epicStartDate: Date, epicEndDate: Date, epicCreatedDate: Date, epicUpdatedDate: Date) {
        this.id = id;
        this.proId = proId;
        this.epicName = epicName;
        this.epicDescription = epicDescription;
        this.epicSummery = epicSummery;
        this.epicAssignee = epicAssignee;
        this.epicStatus = epicStatus;
        this.epicStartDate = epicStartDate;
        this.epicEndDate = epicEndDate;
        this.epicCreatedDate = epicCreatedDate;
        this.epicUpdatedDate = epicUpdatedDate;
    }
}
