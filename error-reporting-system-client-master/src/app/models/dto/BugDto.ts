import {Sprint} from '../Sprint';
import {TestCase} from '../TestCase';
import {Projects} from '../Projects';
import {Feature} from '../feature';
import {User} from '../User';

export class BugDto {
    id: number;
    bugTitle: string;
    bugDescription: string;
    bugSprint: Sprint;
    bugTestCase: TestCase;
    bugProject: Projects;
    bugFeature: Feature;
    bugAssignee: User;
    bugSeverity: string;
    bugPriority: string;
    bugStatus: string;
    bugReporter: User;
    bugEnvironment: string;
    bugStepToReproduce: string;
    bugCreatedDate: Date;
    bugUpdatedDate: Date;

    constructor(id: number, bugTitle: string, bugDescription: string, bugSprint: Sprint, bugTestCase: TestCase, bugProject: Projects, bugFeature: Feature, bugAssignee: User, bugSeverity: string, bugPriority: string, bugStatus: string, bugReporter: User, bugEnvironment: string, bugStepToReproduce: string, bugCreatedDate: Date, bugUpdatedDate: Date) {
        this.id = id;
        this.bugTitle = bugTitle;
        this.bugDescription = bugDescription;
        this.bugSprint = bugSprint;
        this.bugTestCase = bugTestCase;
        this.bugProject = bugProject;
        this.bugFeature = bugFeature;
        this.bugAssignee = bugAssignee;
        this.bugSeverity = bugSeverity;
        this.bugPriority = bugPriority;
        this.bugStatus = bugStatus;
        this.bugReporter = bugReporter;
        this.bugEnvironment = bugEnvironment;
        this.bugStepToReproduce = bugStepToReproduce;
        this.bugCreatedDate = bugCreatedDate;
        this.bugUpdatedDate = bugUpdatedDate;
    }
}
