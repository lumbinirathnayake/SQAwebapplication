export class Story {
    id: number;
    storyName: string;
    storyProjectId: number;
    storyProjectName: String;
    storyEpicId: number;
    storyEpicName: string;
    storyFeatureId: number;
    storyFeatureName: string;
    storySprintId: number;
    storySprintName: string;
    storySummery: string;
    storyDescription: string;
    storyPoints: string;
    storyStartDate: Date;
    storyEndDate: Date;
    storyReporterId: number;
    storyReporterFName: string;
    storyReporterLName: string;
    storyAssigneeId: number;
    storyAssigneeFName: string;
    storyAssigneeLName: string;
    storyStatus: string;
    storyCreatedDate: Date;
    storyUpdatedDate: Date;

    constructor(storyName: string, storyProjectId: number, storyProjectName: String, storyEpicId: number, storyEpicName: string, storyFeatureId: number, storyFeatureName: string, storySprintId: number, storySprintName: string, storySummery: string, storyDescription: string, storyPoints: string, storyStartDate: Date, storyEndDate: Date, storyReporterId: number, storyReporterFName: string, storyReporterLName: string, storyAssigneeId: number, storyAssigneeFName: string, storyAssigneeLName: string, storyStatus: string, storyCreatedDate: Date, storyUpdatedDate: Date) {
        this.storyName = storyName;
        this.storyProjectId = storyProjectId;
        this.storyProjectName = storyProjectName;
        this.storyEpicId = storyEpicId;
        this.storyEpicName = storyEpicName;
        this.storyFeatureId = storyFeatureId;
        this.storyFeatureName = storyFeatureName;
        this.storySprintId = storySprintId;
        this.storySprintName = storySprintName;
        this.storySummery = storySummery;
        this.storyDescription = storyDescription;
        this.storyPoints = storyPoints;
        this.storyStartDate = storyStartDate;
        this.storyEndDate = storyEndDate;
        this.storyReporterId = storyReporterId;
        this.storyReporterFName = storyReporterFName;
        this.storyReporterLName = storyReporterLName;
        this.storyAssigneeId = storyAssigneeId;
        this.storyAssigneeFName = storyAssigneeFName;
        this.storyAssigneeLName = storyAssigneeLName;
        this.storyStatus = storyStatus;
        this.storyCreatedDate = storyCreatedDate;
        this.storyUpdatedDate = storyUpdatedDate;
    }
}
