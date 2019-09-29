import {Component, Inject, OnInit} from '@angular/core';
import {FeatureService} from '../../../services/feature.service';
import {MAT_DIALOG_DATA} from '@angular/material';
import {Feature} from '../../../models/feature';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EpicService} from '../../../services/epic.service';
import {Epic} from '../../../models/epic';
import {EpicDto} from '../../../models/dto/EpicDto';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {CommonJson} from '../../../models/other/CommonJson';

@Component({
  selector: 'app-edit-epic',
  templateUrl: './edit-epic.component.html',
  styleUrls: ['./edit-epic.component.scss']
})
export class EditEpicComponent implements OnInit {
  constructor(
      public epicService: EpicService,
      public userService: UserService,
      @Inject(MAT_DIALOG_DATA) public epicDto: EpicDto) { }


  priorities: CommonJson[] = [
    {value: 'lowest', name: 'Lowest'},
    {value: 'low', name: 'Low'},
    {value: 'medium', name: 'Medium'},
    {value: 'high', name: 'High'},
    {value: 'higher', name: 'Highest'},
    {value: 'needsReview', name: 'Needs Review'},
    {value: 'mustHave', name: 'Must Have'},
    {value: 'niceToHave', name: 'Nice to Have'},
    {value: 'critical', name: 'Critical'},
  ];
  filteredUsers: Observable<User[]>;
  existingEpic: Epic;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.epicService.getSingleEpic(this.epicDto.id).subscribe(ep => this.existingEpic = ep);
  }


  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.editEpicForm.get('epicAssignee').valueChanges
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
  editView = false;
  displayView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;

  editEpicForm = new FormGroup({
    epicName: new FormControl(this.epicDto.epicName, [Validators.required]),
    epicDescription: new FormControl(this.epicDto.epicDescription, ),
    epicSummery: new FormControl(this.epicDto.epicSummery, [Validators.required]),
    epicAssignee: new FormControl(this.epicDto.epicAssignee, [Validators.required]),
    epicStatus: new FormControl(this.epicDto.epicStatus, [Validators.required]),
    epicStartDate: new FormControl({value: this.epicDto.epicStartDate, disabled: true}),
    epicEndDate: new FormControl({value: this.epicDto.epicEndDate, disabled: true})
  });

  updateEpic() {
    if (this.editEpicForm.invalid)
      return;

    let assignee: User = this.editEpicForm.get('epicAssignee').value;

    if (this.existingEpic !== undefined) {
      this.existingEpic.epicName = this.editEpicForm.get('epicName').value;
      this.existingEpic.epicDescription = this.editEpicForm.get('epicDescription').value;
      this.existingEpic.epicSummery = this.editEpicForm.get('epicSummery').value;
      this.existingEpic.epicAssigneeId = assignee.id;
      this.existingEpic.epicAssigneeFName = assignee.userFname;
      this.existingEpic.epicAssigneeLName = assignee.userLName;
      this.existingEpic.epicStatus = this.editEpicForm.get('epicStatus').value;
      this.existingEpic.epicStartDate = this.editEpicForm.get('epicStartDate').value;
      this.existingEpic.epicEndDate = this.editEpicForm.get('epicEndDate').value;
      this.existingEpic.epicUpdatedDate = new Date();

      this.epicService.updateEpic(this.existingEpic).subscribe(
          res => this.displaySuccessMessageView(),
          err => this.displayErrorView()
      );

      setTimeout(() => {
        this.epicService.getAllEpics().subscribe(epics =>
            this.epicService.changeEpic(epics)
        );}, 2000);

    } else {
      this.displayErrorView();
    }
  }

  deleteEpic() {
    this.epicService.deleteEpic(this.epicDto.id).subscribe(
        res => this.displayDeleteSuccessView(),
        err => this.displayErrorView()
    );

    setTimeout(() => {
      this.epicService.getAllEpics().subscribe(epics =>
          this.epicService.changeEpic(epics)
      );}, 2000);
  }

  displayEditView() {
    this.updateSuccessMsgView = false;
    this.displayView = false;
    this.editView = true;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.displayView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.displayView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.displayView = false;
    this.editView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.displayView = false;
    this.editView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearForm() {
    this.editEpicForm.reset();
  }
}
