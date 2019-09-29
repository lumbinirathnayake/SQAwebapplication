import {User} from './User';
import {formatDate} from '@angular/common';

export class Feature {
    public id: number;
    public featureEpicId: number;
    public featureProjectId: number;
    public featureName: string;
    public featureSummary: string;
    public featureDescription: string;
    public featureAssigneeId: number;
    public featureAssigneeFName: string;
    public featureAssigneeLName: string;
    public featureStatus: string;
    public featureStartDate: Date;
    public featureEndDate: Date;
    public featureCreatedDate: Date;
    public featureUpdatedDate: Date;

    constructor(featureEpicId: number, featureProjectId: number, featureName: string, featureSummary: string, featureDescription: string, featureAssigneeId: number, featureAssigneeFName: string, featureAssigneeLName: string, featureStatus: string, featureStartDate: Date, featureEndDate: Date, featureCreatedDate: Date, featureUpdatedDate: Date) {
        this.featureEpicId = featureEpicId;
        this.featureProjectId = featureProjectId;
        this.featureName = featureName;
        this.featureSummary = featureSummary;
        this.featureDescription = featureDescription;
        this.featureAssigneeId = featureAssigneeId;
        this.featureAssigneeFName = featureAssigneeFName;
        this.featureAssigneeLName = featureAssigneeLName;
        this.featureStatus = featureStatus;
        this.featureStartDate = featureStartDate;
        this.featureEndDate = featureEndDate;
        this.featureCreatedDate = featureCreatedDate;
        this.featureUpdatedDate = featureUpdatedDate;
    }
}
