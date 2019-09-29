export class Bugs {
    id: number;
    bugTitle: string;
    bugDescription: string;
    bugSprintId: number;
    bugSprintName: string;
    bugTestCaseId: number;
    bugTestCaseName: string;
    bugProjectId: number;
    bugFeatureId: number;
    bugFeatureName: string;
    bugAssigneeId: number;
    bugAssigneeFName: string;
    bugAssigneeLName: string;
    bugSeverity: string;
    bugPriority: string;
    bugStatus: string;
    bugReporterId: number;
    bugReporterFName: string;
    bugReporterLName: string;
    bugEnvironment: string;
    bugStepToReproduce: string;
    bugCreatedDate: Date;
    bugUpdatedDate: Date;

    constructor(bugTitle: string, bugDescription: string, bugSprintId: number, bugSprintName: string, bugTestCaseId: number, bugTestCaseName: string, bugProjectId: number, bugFeatureId: number, bugFeatureName: string, bugAssigneeId: number, bugAssigneeFName: string, bugAssigneeLName: string, bugSeverity: string, bugPriority: string, bugStatus: string, bugReporterId: number, bugReporterFName: string, bugReporterLName: string, bugEnvironment: string, bugStepToReproduce: string, bugCreatedDate: Date, bugUpdatedDate: Date) {
        this.bugTitle = bugTitle;
        this.bugDescription = bugDescription;
        this.bugSprintId = bugSprintId;
        this.bugSprintName = bugSprintName;
        this.bugTestCaseId = bugTestCaseId;
        this.bugTestCaseName = bugTestCaseName;
        this.bugProjectId = bugProjectId;
        this.bugFeatureId = bugFeatureId;
        this.bugFeatureName = bugFeatureName;
        this.bugAssigneeId = bugAssigneeId;
        this.bugAssigneeFName = bugAssigneeFName;
        this.bugAssigneeLName = bugAssigneeLName;
        this.bugSeverity = bugSeverity;
        this.bugPriority = bugPriority;
        this.bugStatus = bugStatus;
        this.bugReporterId = bugReporterId;
        this.bugReporterFName = bugReporterFName;
        this.bugReporterLName = bugReporterLName;
        this.bugEnvironment = bugEnvironment;
        this.bugStepToReproduce = bugStepToReproduce;
        this.bugCreatedDate = bugCreatedDate;
        this.bugUpdatedDate = bugUpdatedDate;
    }
}
