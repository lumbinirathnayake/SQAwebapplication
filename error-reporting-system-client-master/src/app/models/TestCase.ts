export class TestCase {
    id: number;
    testCaseTitle: string;
    testCaseProjectId: number;
    testCaseFeatureId: number;
    testCaseFeatureGroupId: number;
    testCaseFeatureName: string;
    testCasePriority: string;
    testCaseStatus: string;
    testCaseSeverity: string;
    testCaseAssigneeId: number;
    testCaseAssigneeFName: string;
    testCaseAssigneeLName: string;
    testCaseAutomationStatus: string;
    testCaseType: string;
    testCaseCreatorId: number;
    testCaseCreatorFName: string;
    testCaseCreatorLName: string;
    testCaseTestStep: string;
    testCaseExpectedResult: string;
    testCaseCreatedDate: Date;
    testCaseUpdatedDate: Date;

    constructor(testCaseTitle: string, testCaseProjectId: number, testCaseFeatureId: number, testCaseFeatureGroupId: number, testCaseFeatureName: string, testCasePriority: string, testCaseStatus: string, testCaseSeverity: string, testCaseAssigneeId: number, testCaseAssigneeFName: string, testCaseAssigneeLName: string, testCaseAutomationStatus: string, testCaseType: string, testCaseCreatorId: number, testCaseCreatorFName: string, testCaseCreatorLName: string, testCaseTestStep: string, testCaseExpectedResult: string, testCaseCreatedDate: Date, testCaseUpdatedDate: Date) {
        this.testCaseTitle = testCaseTitle;
        this.testCaseProjectId = testCaseProjectId;
        this.testCaseFeatureId = testCaseFeatureId;
        this.testCaseFeatureGroupId = testCaseFeatureGroupId;
        this.testCaseFeatureName = testCaseFeatureName;
        this.testCasePriority = testCasePriority;
        this.testCaseStatus = testCaseStatus;
        this.testCaseSeverity = testCaseSeverity;
        this.testCaseAssigneeId = testCaseAssigneeId;
        this.testCaseAssigneeFName = testCaseAssigneeFName;
        this.testCaseAssigneeLName = testCaseAssigneeLName;
        this.testCaseAutomationStatus = testCaseAutomationStatus;
        this.testCaseType = testCaseType;
        this.testCaseCreatorId = testCaseCreatorId;
        this.testCaseCreatorFName = testCaseCreatorFName;
        this.testCaseCreatorLName = testCaseCreatorLName;
        this.testCaseTestStep = testCaseTestStep;
        this.testCaseExpectedResult = testCaseExpectedResult;
        this.testCaseCreatedDate = testCaseCreatedDate;
        this.testCaseUpdatedDate = testCaseUpdatedDate;
    }
}
