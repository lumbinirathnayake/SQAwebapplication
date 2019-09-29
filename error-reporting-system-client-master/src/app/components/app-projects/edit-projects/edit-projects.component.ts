import {Component, ElementRef, Inject, OnInit, ViewChild} from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {MAT_DIALOG_DATA, MatAutocomplete, MatAutocompleteSelectedEvent, MatChipInputEvent} from '@angular/material';
import {Projects} from '../../../models/Projects';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {UserService} from '../../../services/user.service';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {map, startWith} from 'rxjs/operators';
import {ProjectDto} from '../../../models/dto/ProjectDto';
import {CommonJson} from '../../../models/other/CommonJson';
import {CommonService} from '../../../services/common.service';
import {cursorTo} from 'readline';

@Component({
  selector: 'app-edit-projects',
  templateUrl: './edit-projects.component.html',
  styleUrls: ['./edit-projects.component.scss']
})
export class EditProjectsComponent implements OnInit {
  @ViewChild('fruitInput') fruitInput: ElementRef<HTMLInputElement>;
  @ViewChild('auto') matAutocomplete: MatAutocomplete;

  constructor(private projectService: ProjectsService,
              private userService: UserService,
              private commonService: CommonService,
              @Inject(MAT_DIALOG_DATA) public data: ProjectDto) { }

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
  existingProject: Projects;
  existingProLead: User;
  currrentUser: User;
  ngOnInit() {
    this.projectsUsers = this.data.proUsers;
    this.projectService.getSingleProjects(this.data.id)
        .subscribe(data => this.existingProject = data);
    this.userService.getAllUsers().subscribe(fe =>  {
      this.userAutocomplete(fe);
      this.allExistingUsers = fe;
      this.projectsAutoComplete();
    });
    this.commonService.currentUser.subscribe(us => {this.currrentUser = us});
  }

  projectsAutoComplete() {
    this.filteredUsers = this.editProjectsForm.get('proUsers').valueChanges.pipe(
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

      this.editProjectsForm.get('proUsers').setValue(null);
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
    this.editProjectsForm.get('proUsers').setValue(null);
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
    this.filteredLeads = this.editProjectsForm.get('proLead').valueChanges
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

  editProjectsForm = new FormGroup({
    proName: new FormControl(this.data.proName, Validators.required),
    proDescription: new FormControl(this.data.proDescription, Validators.required),
    proLead: new FormControl(this.data.proLead, Validators.required),
    proType: new FormControl(this.data.proType, Validators.required),
    proUsers: new FormControl(this.projectsUsers),
    proStartedDate: new FormControl({value: this.data.proStartedDate, disabled: true}),
    proEndDate: new FormControl({value: this.data.proEndDate, disabled: true}),
  });

  updateSuccessMsgView = false;
  editView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;

  oldUsers: User[];
  updateProject() {
    let proLead: User = this.editProjectsForm.get('proLead').value;
    if (this.existingProject !== undefined) {
      this.existingProject.proName = this.editProjectsForm.get('proName').value;
      this.existingProject.proType = this.editProjectsForm.get('proType').value;
      this.existingProject.proDescription = this.editProjectsForm.get('proDescription').value;
      // old project users
      this.oldUsers = this.existingProject.proUsers;
      // assign new project users
      this.existingProject.proUsers = this.projectsUsers;
      this.existingProject.proCreatorId = this.currrentUser.id;
      this.existingProject.proCreatorFName = this.currrentUser.userFname;
      this.existingProject.proCreatorLName = this.currrentUser.userLName;
      this.existingProject.proLeadId = proLead.id;
      this.existingProject.proLeadFName = proLead.userFname;
      this.existingProject.proLeadLName = proLead.userLName;
      this.existingProject.proStartedDate = this.editProjectsForm.get('proStartedDate').value;
      this.existingProject.proEndDate = this.editProjectsForm.get('proEndDate').value;
      this.existingProject.proUpdatedDate = new Date();

      this.projectService.updateProject(this.existingProject).subscribe(
          re => this.displaySuccessMessageView(),
          err => this.displayErrorView()
      );

      // remove projects from old users
      for (let oldUser of this.oldUsers) {
        this.userService.getSingleUser(oldUser.id).subscribe(realUser => {
          console.log(realUser);
          // let existingPros: Projects[] = realUser.userProjects;
          // console.log(existingPros);
          // if (existingPros != null) {
          //   for (let pro of existingPros) {
          //     if (pro.id === this.existingProject.id) {
          //       let index = existingPros.indexOf(pro);
          //       if (index > -1) {
          //         existingPros.splice(index, 1);
          //       }
          //     }
          //   }
          //   realUser.userProjects = existingPros;
          //   console.log(realUser);
          //   this.userService.updateUsers(realUser).subscribe();
          // }
        });
      }

      // add projects to defines users
      // for (let newUser of this.projectsUsers) {
      //   this.userService.getSingleUser(newUser.id).subscribe( realUser => {
      //     let existingPros = realUser.userProjects;
      //     // define null for project users
      //     this.existingProject.proUsers = null;
      //     existingPros.push(this.existingProject);
      //     realUser.userProjects = existingPros;
      //     this.userService.updateUsers(realUser).subscribe();
      //   });
      // }

      // if (this.projectsUsers.length !== 0) {
      //   for (let user of this.projectsUsers) {
      //     this.userService.getSingleUser(user.id).subscribe(u => {
      //       let pros = u.userProjects;
      //       pros.forEach(p => {
      //         if (p.id === this.existingProject.id) {
      //           pros.splice(pros.indexOf(p), 1);
      //         } else {
      //           pros.push(p);
      //         }
      //       });
      //       u.userProjects = pros;
      //       this.userService.updateUsers(u).subscribe();
      //     })
      //   }
      // }

      setTimeout(() => {
        this.projectService.getAllProjects().subscribe(res =>
            this.projectService.changeProjects(res)
        )}, 2000);

    } else
      this.displayErrorView();
  }

  deleteProjects() {
    this.projectService.deleteProjects(this.data.id).subscribe(
        re => this.displaySuccessMessageView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.projectService.getAllProjects().subscribe(pro => {
        this.projectService.changeProjects(pro)
      })}, 2000);
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

}
