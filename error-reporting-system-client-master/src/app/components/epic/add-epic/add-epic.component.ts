import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {FeatureService} from '../../../services/feature.service';
import {Feature} from '../../../models/feature';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {EpicService} from '../../../services/epic.service';
import {Epic} from '../../../models/epic';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {map, startWith} from 'rxjs/operators';
import {UserService} from '../../../services/user.service';
import {CommonJson} from '../../../models/other/CommonJson';
import {Projects} from '../../../models/Projects';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-add-epic',
  templateUrl: './add-epic.component.html',
  styleUrls: ['./add-epic.component.scss']
})
export class AddEpicComponent implements OnInit {
  constructor(
      public dialogref: MatDialogRef<AddEpicComponent>,
      public featureService: FeatureService,
      public userService: UserService,
      public epicService: EpicService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) public data: Epic) { }

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
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
  }


  userAutocomplete(fe: User[]) {
    this.filteredUsers = this.addEpicForm.get('epicAssignee').valueChanges
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
  addEpicForm = new FormGroup({
    epicName: new FormControl('', [Validators.required]),
    epicDescription: new FormControl('', ),
    epicSummery: new FormControl('', [Validators.required]),
    epicAssignee: new FormControl('', [Validators.required]),
    epicStatus: new FormControl('', [Validators.required]),
    epicStartDate: new FormControl({value: '', disabled: true}),
    epicEndDate: new FormControl({value: '', disabled: true})
  });
  saveEpic() {
    if (this.addEpicForm.invalid)
      return;

    let epicAssignee: User = this.addEpicForm.get('epicAssignee').value;
    let newEpic = new Epic(
        this.currentPro.id,
        this.addEpicForm.get('epicName').value,
        this.addEpicForm.get('epicDescription').value,
        this.addEpicForm.get('epicSummery').value,
        epicAssignee.id, epicAssignee.userFname, epicAssignee.userLName,
        this.addEpicForm.get('epicStatus').value,
        this.addEpicForm.get('epicStartDate').value,
        this.addEpicForm.get('epicEndDate').value,
        new Date(), null
    );
    this.epicService.createNewEpic(newEpic).subscribe(
        res => this.displaySuccessMessageView(),
        error1 => this.displayErrorMsgView()
    );
    setTimeout(() => {
      this.epicService.getAllEpics().subscribe(
          re => this.epicService.changeEpic(re)
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
    this.addEpicForm.reset();
  }
}
