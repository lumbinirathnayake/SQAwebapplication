import {Feature} from '../feature';
import {User} from '../User';

export class TestCaseDto {
    id: number;
    testCaseTitle: string;
    testCaseProjectId: number;
    testCaseFeature: Feature;
    testCasePriority: string;
    testCaseStatus: string;
    testCaseSeverity: string;
    testCaseAssignee: User;
    testCaseAutomationStatus: string;
    testCaseType: string;
    testCaseCreator: User;
    testCaseTestStep: string;
    testCaseExpectedResult: string;
    testCaseCreatedDate: Date;
    testCaseUpdatedDate: Date;

    constructor(id: number, testCaseTitle: string, testCaseProjectId: number, testCaseFeature: Feature, testCasePriority: string, testCaseStatus: string, testCaseSeverity: string, testCaseAssignee: User, testCaseAutomationStatus: string, testCaseType: string, testCaseCreator: User, testCaseTestStep: string, testCaseExpectedResult: string, testCaseCreatedDate: Date, testCaseUpdatedDate: Date) {
        this.id = id;
        this.testCaseTitle = testCaseTitle;
        this.testCaseProjectId = testCaseProjectId;
        this.testCaseFeature = testCaseFeature;
        this.testCasePriority = testCasePriority;
        this.testCaseStatus = testCaseStatus;
        this.testCaseSeverity = testCaseSeverity;
        this.testCaseAssignee = testCaseAssignee;
        this.testCaseAutomationStatus = testCaseAutomationStatus;
        this.testCaseType = testCaseType;
        this.testCaseCreator = testCaseCreator;
        this.testCaseTestStep = testCaseTestStep;
        this.testCaseExpectedResult = testCaseExpectedResult;
        this.testCaseCreatedDate = testCaseCreatedDate;
        this.testCaseUpdatedDate = testCaseUpdatedDate;
    }
}
