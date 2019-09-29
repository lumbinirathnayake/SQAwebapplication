import {LogTimeHistory} from './other/LogTimeHistory';

export class Tasks {
    id: number;
    taskName: string;
    taskProjectId: number;
    taskStoryId: number;
    taskStoryName: string;
    taskFeatureId: number;
    taskFeatureName: string;
    taskSprintId: number;
    taskSprintName: string;
    taskSummery: string;
    taskDescription: string;
    taskStartDate: Date;
    taskEndDate: Date;
    taskAssigneeId: number;
    taskAssigneeFName: string;
    taskAssigneeLName: string;
    taskCreattorId: number;
    taskCreattorFName: string;
    taskCreattorLName: string;
    taskStatus: string;
    taskEstimatedTime: number;
    taskRemainingTime: number;
    taskLoggedTime: LogTimeHistory[];
    taskCreatedDate: Date;
    taskUpdatedDate: Date;


    constructor(taskName: string, taskProjectId: number, taskStoryId: number, taskStoryName: string, taskFeatureId: number, taskFeatureName: string, taskSprintId: number, taskSprintName: string, taskSummery: string, taskDescription: string, taskStartDate: Date, taskEndDate: Date, taskAssigneeId: number, taskAssigneeFName: string, taskAssigneeLName: string, taskCreattorId: number, taskCreattorFName: string, taskCreattorLName: string, taskStatus: string, taskEstimatedTime: number, taskLoggedTime: LogTimeHistory[], taskCreatedDate: Date, taskUpdatedDate: Date) {
        this.taskName = taskName;
        this.taskProjectId = taskProjectId;
        this.taskStoryId = taskStoryId;
        this.taskStoryName = taskStoryName;
        this.taskFeatureId = taskFeatureId;
        this.taskFeatureName = taskFeatureName;
        this.taskSprintId = taskSprintId;
        this.taskSprintName = taskSprintName;
        this.taskSummery = taskSummery;
        this.taskDescription = taskDescription;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskAssigneeId = taskAssigneeId;
        this.taskAssigneeFName = taskAssigneeFName;
        this.taskAssigneeLName = taskAssigneeLName;
        this.taskCreattorId = taskCreattorId;
        this.taskCreattorFName = taskCreattorFName;
        this.taskCreattorLName = taskCreattorLName;
        this.taskStatus = taskStatus;
        this.taskEstimatedTime = taskEstimatedTime;
        this.taskLoggedTime = taskLoggedTime;
        this.taskCreatedDate = taskCreatedDate;
        this.taskUpdatedDate = taskUpdatedDate;
    }

    // set logTime(logTime: number) {
    //     this.taskLoggedTime.push({date: new Date(), loggedHours: logTime});
    //     this.taskRemainingTime = this.taskEstimatedTime - this.calTotLoggedTime(this.taskLoggedTime);
    // }
    //
    // calTotLoggedTime(logTimeHistory: LogTimeHistory[]): number {
    //     let totTime = 0;
    //     for (let time of logTimeHistory) {
    //         totTime += time.loggedHours;
    //     }
    //     return totTime;
    // }
}
