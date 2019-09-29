import {TestCase} from '../TestCase';

export class TestCaseFeatureGroup {
    id: number;
    testCaseFeatureId: number;
    testCaseFeatureGroupName: string;
    testCaseFeatureGroupTestCases: TestCase[];

    constructor(testCaseFetureId: number, testCaseFeatureGroupName: string, testCaseFeatureGroupTestCases: TestCase[]) {
        this.testCaseFeatureId = testCaseFetureId;
        this.testCaseFeatureGroupName = testCaseFeatureGroupName;
        this.testCaseFeatureGroupTestCases = testCaseFeatureGroupTestCases;
    }
}
