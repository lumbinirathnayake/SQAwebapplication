import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../../models/User';
import {ProjectsService} from '../../../services/projects.service';
import {Projects} from '../../../models/Projects';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {CommonJson} from '../../../models/other/CommonJson';
import {CommonService} from '../../../services/common.service';

@Component({
  selector: 'app-add-projects',
  templateUrl: './add-projects.component.html',
  styleUrls: ['./add-projects.component.scss']
})
export class AddProjectsComponent implements OnInit {
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private projectService: ProjectsService,
              private userService: UserService,
              private commonService: CommonService) { }

  ProTypes: CommonJson[] = [
    {value: 'software', name: 'software'},
    {value: 'business', name: 'business'},
  ];
  filteredLeads: Observable<User[]>;

  selectable = true;
  removable = true;
  addOnBlur = true;
  separatorKeysCodes: number[] = [ENTER, COMMA];
  filteredUsers: Observable<User[]>;
  projectsUsers: User[] = [];
  allExistingUsers: User[];
  currentUser: User;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  {
      this.userAutocomplete(fe);
      this.allExistingUsers = fe;
      this.projectsAutoComplete();
    });
    this.commonService.currentUser.subscribe(use => {this.currentUser = use});
  }

  projectsAutoComplete() {
    this.filteredUsers = this.addProjectsForm.get('proUsers').valueChanges.pipe(
        startWith(null),
        map((fruit: User | null) => fruit ? this._filter(fruit) : this.allExistingUsers.slice()));
  }
  add(event: MatChipInputEvent): void {
    if (!this.matAutocomplete.isOpen) {
      const input = event.input;
      const value = event.value.toLowerCase();

      // Add our project
      if ((value || '').trim()) {
        this.allExistingUsers.filter(pro => {
          if (pro.userFname.toLowerCase().indexOf(value) === 0) {
            this.projectsUsers.push(pro);
          }
        });
        console.log(this.projectsUsers);
      }

      // Reset the input value
      if (input) {
        input.value = '';
      }

      this.addProjectsForm.get('proUsers').setValue(null);
    }
  }
  remove(project: User): void {
    const index = this.projectsUsers.indexOf(project);

    if (index >= 0) {
      this.projectsUsers.splice(index, 1);
    }
  }
  selected(event: MatAutocompleteSelectedEvent): void {
    let pro = event.option.viewValue.toLocaleLowerCase();
    this.allExistingUsers.filter(pr => {
      let fullName = pr.userFname + ' ' + pr.userLName;
      if (fullName.toLowerCase().indexOf(pro) === 0) {
        this.projectsUsers.push(pr);
      }
    });
    this.fruitInput.nativeElement.value = '';
    this.addProjectsForm.get('proUsers').setValue(null);
  }
  private _filter(proName: User): User[] {
    let filterValue = null;
    if (typeof proName === 'string') {
      let name: string = proName;
      filterValue = name.toLowerCase();
    } else {
      let name: string = proName.userFname;
      filterValue = name;
    }
    return this.allExistingUsers.filter(pro => pro.userFname.toLowerCase().indexOf(filterValue) === 0);
  }

  userAutocomplete(fe: User[]) {
    this.filteredLeads = this.addProjectsForm.get('proLead').valueChanges
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

  addProjectsForm = new FormGroup({
    proName: new FormControl('', Validators.required),
    proDescription: new FormControl('', Validators.required),
    proLead: new FormControl('', Validators.required),
    proType: new FormControl('', Validators.required),
    proUsers: new FormControl(''),
    proStartedDate: new FormControl({value: '', disabled: true}),
    proEndDate: new FormControl({value: '', disabled: true}),
  });

  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;

  createNewProject() {
    if (this.addProjectsForm.invalid)
      return;

    let lead: User = this.addProjectsForm.get('proLead').value;

    let newProject = new Projects(
        this.addProjectsForm.get('proName').value,
        this.addProjectsForm.get('proType').value,
        this.addProjectsForm.get('proDescription').value,
        this.projectsUsers,
        this.currentUser.id, this.currentUser.userFname, this.currentUser.userLName,
        lead.id, lead.userFname, lead.userLName,
        this.addProjectsForm.get('proStartedDate').value,
        this.addProjectsForm.get('proEndDate').value,
        new Date(), null
    );

    this.projectService.createNewProject(newProject).subscribe(
        re => this.displaySuccessMessageView(),
        error1 => this.displayErrorMsg()
    );

    if (this.projectsUsers.length !== 0) {
      for (let user of this.projectsUsers) {
        this.userService.getSingleUser(user.id).subscribe(u => {
          let pros = u.userProjects;
          pros.push(newProject);
          u.userProjects = pros;
          this.userService.updateUsers(u).subscribe();
        })
      }
    }

    this.projectService.getAllProjects().subscribe(res =>
      this.projectService.changeProjects(res)
    );
  }

  displaySuccessMessageView() {
    this.createView = false;
    this.createSuccessMsgView = true;
    this.errorMsgView = false;
  }
  displayErrorMsg() {
    this.createView = false;
    this.createSuccessMsgView = false;
    this.errorMsgView = true;
  }
  clearForm() {
    this.addProjectsForm.reset();
  }
}
