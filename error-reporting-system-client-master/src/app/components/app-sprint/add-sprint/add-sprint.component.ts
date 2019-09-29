import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FeatureService} from '../../../services/feature.service';
import {UserService} from '../../../services/user.service';
import {EpicService} from '../../../services/epic.service';
import {CommonService} from '../../../services/common.service';
import {Epic} from '../../../models/epic';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Projects} from '../../../models/Projects';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Sprint} from '../../../models/Sprint';
import {SprintService} from '../../../services/sprint.service';

@Component({
  selector: 'app-add-sprint',
  templateUrl: './add-sprint.component.html',
  styleUrls: ['./add-sprint.component.scss']
})
export class AddSprintComponent implements OnInit {
  constructor(
      public featureService: FeatureService,
      public userService: UserService,
      public epicService: EpicService,
      private sprintService: SprintService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) public data: Epic) { }

  priorities: CommonJson[] = [
    {value: 'open', name: 'Open'},
    {value: 'close', name: 'Close'},
    {value: 'inprogress', name: 'Inprogress'},
  ];
  filteredUsers: Observable<User[]>;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }


  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.addSprintForm.get('sprintCreator').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
  }
  private _filterUser(name: string, fe: User[]): User[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        user => user.userFname.toLowerCase().indexOf(filterValue) === 0);
  }
  displayUserAutocomplete(user: User): string | undefined {
    const userFullName = user.userFname + ' ' + user.userLName;
    return user ? userFullName : undefined;
  }


  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  addSprintForm = new FormGroup({
    sprintName: new FormControl('', [Validators.required]),
    sprintDescription: new FormControl('', ),
    sprintSummery: new FormControl('', [Validators.required]),
    sprintCreator: new FormControl('', [Validators.required]),
    sprintStatus: new FormControl('', [Validators.required]),
    sprintStartDate: new FormControl({value: '', disabled: true}),
    sprintEndDate: new FormControl({value: '', disabled: true})
  });
  saveSprint() {
    if (this.addSprintForm.invalid)
      return;

    let sprintCreator: User = this.addSprintForm.get('sprintCreator').value;
    let newSprint = new Sprint(
        this.addSprintForm.get('sprintName').value,
        this.addSprintForm.get('sprintDescription').value,
        this.addSprintForm.get('sprintSummery').value,
        this.currentPro.id,
        sprintCreator.id, sprintCreator.userFname, sprintCreator.userLName,
        this.addSprintForm.get('sprintStatus').value,
        this.addSprintForm.get('sprintStartDate').value,
        this.addSprintForm.get('sprintEndDate').value,
        new Date(), null
    );

    this.sprintService.createNewSprint(newSprint).subscribe(
        res => this.displaySuccessMessageView(),
        error1 => this.displayErrorMsgView()
    );
    setTimeout(() => {
      this.sprintService.getAllSprints().subscribe(
          re => this.sprintService.changeSprints(re)
      )}, 2000);
  }
  displaySuccessMessageView() {
    this.createView = false;
    this.createSuccessMsgView = true;
    this.errorMsgView = false;
  }
  displayErrorMsgView() {
    this.createView = false;
    this.createSuccessMsgView = false;
    this.errorMsgView = true;
  }
  clearForm() {
    this.addSprintForm.reset();
  }
}
