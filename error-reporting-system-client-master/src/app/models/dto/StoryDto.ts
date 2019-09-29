import {Projects} from '../Projects';
import {Epic} from '../epic';
import {Feature} from '../feature';
import {Sprint} from '../Sprint';
import {User} from '../User';

export class StoryDto {
    id: number;
    storyName: string;
    storyProject: Projects;
    storyEpic: Epic;
    storyFeature: Feature;
    storySprint: Sprint;
    storySummery: string;
    storyDescription: string;
    storyPoints: string;
    storyStartDate: Date;
    storyEndDate: Date;
    storyReporter: User;
    storyAssignee: User;
    storyStatus: string;
    storyCreatedDate: Date;
    storyUpdatedDate: Date;

    constructor(id: number, storyName: string, storyProject: Projects, storyEpic: Epic, storyFeature: Feature, storySprint: Sprint, storySummery: string, storyDescription: string, storyPoints: string, storyStartDate: Date, storyEndDate: Date, storyReporter: User, storyAssignee: User, storyStatus: string, storyCreatedDate: Date, storyUpdatedDate: Date) {
        this.id = id;
        this.storyName = storyName;
        this.storyProject = storyProject;
        this.storyEpic = storyEpic;
        this.storyFeature = storyFeature;
        this.storySprint = storySprint;
        this.storySummery = storySummery;
        this.storyDescription = storyDescription;
        this.storyPoints = storyPoints;
        this.storyStartDate = storyStartDate;
        this.storyEndDate = storyEndDate;
        this.storyReporter = storyReporter;
        this.storyAssignee = storyAssignee;
        this.storyStatus = storyStatus;
        this.storyCreatedDate = storyCreatedDate;
        this.storyUpdatedDate = storyUpdatedDate;
    }
}
