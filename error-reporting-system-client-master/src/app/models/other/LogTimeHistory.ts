export class LogTimeHistory {
    id: number;
    taskId: number;
    date: Date;
    loggedHours: number;
    remainingHours: number;
    estimatedHours: number;


    constructor(taskId: number, date: Date, loggedHours: number, remainingHours: number, estimatedHours: number) {
        this.taskId = taskId;
        this.date = date;
        this.loggedHours = loggedHours;
        this.remainingHours = remainingHours;
        this.estimatedHours = estimatedHours;
    }
}
