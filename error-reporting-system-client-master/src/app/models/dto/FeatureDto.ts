import {Epic} from '../epic';
import {User} from '../User';

export class FeatureDto {
    public id: number;
    public featureEpic: Epic;
    public featureProjectId: number;
    public featureName: string;
    public featureSummary: string;
    public featureDescription: string;
    public featureAssignee: User;
    public featureStatus: string;
    public featureStartDate: Date;
    public featureEndDate: Date;
    public featureCreatedDate: Date;
    public featureUpdatedDate: Date;

    constructor(id: number, featureEpic: Epic, featureProjectId: number, featureName: string, featureSummary: string, featureDescription: string, featureAssignee: User, featureStatus: string, featureStartDate: Date, featureEndDate: Date, featureCreatedDate: Date, featureUpdatedDate: Date) {
        this.id = id;
        this.featureEpic = featureEpic;
        this.featureProjectId = featureProjectId;
        this.featureName = featureName;
        this.featureSummary = featureSummary;
        this.featureDescription = featureDescription;
        this.featureAssignee = featureAssignee;
        this.featureStatus = featureStatus;
        this.featureStartDate = featureStartDate;
        this.featureEndDate = featureEndDate;
        this.featureCreatedDate = featureCreatedDate;
        this.featureUpdatedDate = featureUpdatedDate;
    }
}
