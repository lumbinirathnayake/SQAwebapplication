import {Component, Inject, OnInit} from '@angular/core';
import {EpicService} from '../../../services/epic.service';
import {UserService} from '../../../services/user.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {EpicDto} from '../../../models/dto/EpicDto';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Epic} from '../../../models/epic';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {FeatureService} from '../../../services/feature.service';
import {SprintService} from '../../../services/sprint.service';
import {CommonService} from '../../../services/common.service';
import {Projects} from '../../../models/Projects';
import {Sprint} from '../../../models/Sprint';
import {SprintDto} from '../../../models/dto/SprintDto';

@Component({
  selector: 'app-edit-sprint',
  templateUrl: './edit-sprint.component.html',
  styleUrls: ['./edit-sprint.component.scss']
})
export class EditSprintComponent implements OnInit {
  constructor(
      public featureService: FeatureService,
      public userService: UserService,
      public epicService: EpicService,
      private sprintService: SprintService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) public sprintDto: SprintDto) { }

  priorities: CommonJson[] = [
    {value: 'open', name: 'Open'},
    {value: 'close', name: 'Close'},
    {value: 'inprogress', name: 'Inprogress'},
  ];
  filteredUsers: Observable<User[]>;
  currentPro: Projects;
  existingSprint: Sprint;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.sprintService.getSingleSprint(this.sprintDto.id).subscribe(sp => this.existingSprint = sp);
  }


  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.editSprintForm.get('sprintCreator').valueChanges
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


  updateSuccessMsgView = false;
  editView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;
  editSprintForm = new FormGroup({
    sprintName: new FormControl(this.sprintDto.sprintName, [Validators.required]),
    sprintDescription: new FormControl(this.sprintDto.sprintDescription),
    sprintSummery: new FormControl(this.sprintDto.sprintSummery, [Validators.required]),
    sprintCreator: new FormControl(this.sprintDto.sprintCreator, [Validators.required]),
    sprintStatus: new FormControl(this.sprintDto.sprintStatus, [Validators.required]),
    sprintStartDate: new FormControl({value: this.sprintDto.sprintStartDate, disabled: true}),
    sprintEndDate: new FormControl({value: this.sprintDto.sprintEndDate, disabled: true})
  });

  updateEpic() {
    if (this.editSprintForm.invalid)
      return;

    const cre: User = this.editSprintForm.get('sprintCreator').value;

    this.existingSprint.sprintName = this.editSprintForm.get('sprintName').value;
    this.existingSprint.sprintDescription = this.editSprintForm.get('sprintDescription').value;
    this.existingSprint.sprintSummery = this.editSprintForm.get('sprintSummery').value;
    this.existingSprint.sprintCreatorId = cre.id;
    this.existingSprint.sprintCreatorFName = cre.userFname;
    this.existingSprint.sprintCreatorLName = cre.userLName;
    this.existingSprint.sprintStatus = this.editSprintForm.get('sprintStatus').value;
    this.existingSprint.sprintStartDate = this.editSprintForm.get('sprintStartDate').value;
    this.existingSprint.sprintEndDate = this.editSprintForm.get('sprintEndDate').value;
    this.existingSprint.sprintUpdatedDate = new Date();

    this.sprintService.updateSprint(this.existingSprint).subscribe(
        res => this.displaySuccessMessageView(),
        res => this.displayErrorView()
    );

    setTimeout(() => {
      this.sprintService.getAllSprints().subscribe(sp =>
          this.sprintService.changeSprints(sp)
      )}, 2000);
  }

  deleteSprint() {
    this.sprintService.deleteSprint(this.existingSprint.id).subscribe(
        re => this.displayDeleteSuccessView(),
        er => this.displayErrorView()
    );

    setTimeout(() => {
      this.sprintService.getAllSprints().subscribe(sp =>
          this.sprintService.changeSprints(sp)
      )}, 2000);
  }

  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editSprintForm.reset();
  }
}
