import {User} from '../User';
import {LogTimeHistory} from '../other/LogTimeHistory';
import {Sprint} from '../Sprint';

export class TaskDto {
    id: number;
    taskName: string;
    taskProjectId: number;
    taskStoryId: number;
    taskStoryName: string;
    taskFeatureId: number;
    taskFeatureName: string;
    taskSprint: Sprint;
    taskSummery: string;
    taskDescription: string;
    taskStartDate: Date;
    taskEndDate: Date;
    taskAssignee: User;
    taskCreattor: User;
    taskStatus: string;
    taskEstimatedTime: number;
    taskRemainingTime: number;
    taskLoggedTime: LogTimeHistory[];
    taskCreatedDate: Date;
    taskUpdatedDate: Date;

    constructor(id: number, taskName: string, taskProjectId: number, taskStoryId: number, taskStoryName: string, taskFeatureId: number, taskFeatureName: string, taskSprint: Sprint, taskSummery: string, taskDescription: string, taskStartDate: Date, taskEndDate: Date, taskAssignee: User, taskCreattor: User, taskStatus: string, taskEstimatedTime: number, taskRemainingTime: number, taskLoggedTime: LogTimeHistory[], taskCreatedDate: Date, taskUpdatedDate: Date) {
        this.id = id;
        this.taskName = taskName;
        this.taskProjectId = taskProjectId;
        this.taskStoryId = taskStoryId;
        this.taskStoryName = taskStoryName;
        this.taskFeatureId = taskFeatureId;
        this.taskFeatureName = taskFeatureName;
        this.taskSprint = taskSprint;
        this.taskSummery = taskSummery;
        this.taskDescription = taskDescription;
        this.taskStartDate = taskStartDate;
        this.taskEndDate = taskEndDate;
        this.taskAssignee = taskAssignee;
        this.taskCreattor = taskCreattor;
        this.taskStatus = taskStatus;
        this.taskEstimatedTime = taskEstimatedTime;
        this.taskRemainingTime = taskRemainingTime;
        this.taskLoggedTime = taskLoggedTime;
        this.taskCreatedDate = taskCreatedDate;
        this.taskUpdatedDate = taskUpdatedDate;
    }
}
