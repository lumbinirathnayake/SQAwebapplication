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
import {Feature} from '../../../models/feature';
import {Story} from '../../../models/Story';
import {StoryService} from '../../../services/story.service';
import {SprintService} from '../../../services/sprint.service';
import {Sprint} from '../../../models/Sprint';

@Component({
  selector: 'app-add-story',
  templateUrl: './add-story.component.html',
  styleUrls: ['./add-story.component.scss']
})
export class AddStoryComponent implements OnInit {
  constructor(
      private featureService: FeatureService,
      private userService: UserService,
      private epicService: EpicService,
      private storyService: StoryService,
      private commonService: CommonService,
      private sprintService: SprintService) { }

  storyStatus: CommonJson[] = [
    {value: 'new', name: 'New'},
    {value: 'open', name: 'Open'},
    {value: 'close', name: 'Close'},
    {value: 'inprogress', name: 'Inprogress'},
  ];
  filteredAssignee: Observable<User[]>;
  filteredReporter: Observable<User[]>;
  filteredEpics: Observable<Epic[]>;
  filteredSprints: Observable<Sprint[]>;
  filteredFeatures: Observable<Feature[]>;
  currentPro: Projects;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.epicService.getAllEpics().subscribe(ep => this.epicAutocomplete(ep));
    this.featureService.getAllFeatures().subscribe(fea => this.featureAutocomplete(fea));
    this.sprintService.getAllSprints().subscribe(sp => {
      let spr: Sprint[] = [];
      for (let s of sp)
        if (s.sprintProjectId === this.currentPro.id)
          spr.push(s);
      this.sprintAutocomplete(spr)
    });
  }

  epicAutocomplete(epics: Epic[]) {
    this.filteredEpics = this.addStoryForm.get('storyEpic').valueChanges
        .pipe(
            startWith<string | Epic>(''),
            map(value => typeof value === 'string' ? value : value.epicName),
            map(name => name ? this._filterEpic(name, epics) : epics.slice())
        );
  }
  private _filterEpic(name: string, epics: Epic[]): Epic[] {
    const filterValue = name.toLowerCase();
    return epics.filter(
        ep => ep.epicName.toLowerCase().indexOf(filterValue) === 0);
  }
  displayEpicAutocomplete(epic: Epic): string | undefined {
    return epic ? epic.epicName : undefined;
  }

  featureAutocomplete(features: Feature[]) {
    this.filteredFeatures = this.addStoryForm.get('storyFeature').valueChanges
        .pipe(
            startWith<string | Feature>(''),
            map(value => typeof value === 'string' ? value : value.featureName),
            map(name => name ? this._filterFeatures(name, features) : features.slice())
        );
  }
  private _filterFeatures(name: string, features: Feature[]): Feature[] {
    const filterValue = name.toLowerCase();
    return features.filter(
        ep => ep.featureName.toLowerCase().indexOf(filterValue) === 0);
  }
  displayFeatureAutocomplete(feature: Feature): string | undefined {
    return feature ? feature.featureName : undefined;
  }

  userAutocomplete(fe: User[]) {
    this.filteredAssignee = this.addStoryForm.get('storyAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
    this.filteredReporter = this.addStoryForm.get('storyReporter').valueChanges
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

  sprintAutocomplete(sprints: Sprint[]) {
    this.filteredSprints = this.addStoryForm.get('storySprint').valueChanges
        .pipe(
            startWith<string | Sprint>(''),
            map(value => typeof value === 'string' ? value : value.sprintName),
            map(name => name ? this._filterSprint(name, sprints) : sprints.slice())
        );
  }
  private _filterSprint(name: string, fe: Sprint[]): Sprint[] {
    const filterValue = name.toLowerCase();
    return fe.filter(
        sp => sp.sprintName.toLowerCase().indexOf(filterValue) === 0);
  }
  displaySprintAutocomplete(sprint: Sprint): string | undefined {
    return sprint ? sprint.sprintName : undefined;
  }


  createView = true;
  createSuccessMsgView = false;
  errorMsgView = false;
  addStoryForm = new FormGroup({
    storyName: new FormControl('', [Validators.required]),
    storySummery: new FormControl('', [Validators.required]),
    storyEpic: new FormControl('', [Validators.required]),
    storyDescription: new FormControl(''),
    storyFeature: new FormControl('', [Validators.required]),
    storySprint: new FormControl('', [Validators.required]),
    storyReporter: new FormControl('', [Validators.required]),
    storyAssignee: new FormControl('', [Validators.required]),
    storyStatus: new FormControl('', [Validators.required]),
    storyPoints: new FormControl('', [Validators.required]),
    storyStartDate: new FormControl({value: '', disabled: true}, [Validators.required]),
    storyEndDate: new FormControl({value: '', disabled: true}, [Validators.required]),
  });
  saveEpic() {
    if (this.addStoryForm.invalid)
      return;

    let storyEpic: User = this.addStoryForm.get('storyEpic').value;
    let storyFeature: User = this.addStoryForm.get('storyFeature').value;
    let storySprint: User = this.addStoryForm.get('storySprint').value;
    let storyAssignee: User = this.addStoryForm.get('storyAssignee').value;
    let storyReporter: User = this.addStoryForm.get('storyReporter').value;

    this.epicService.getSingleEpic(storyEpic.id).subscribe(ep => {
      this.featureService.getSingleFeature(storyFeature.id).subscribe(st => {
        this.userService.getSingleUser(storyAssignee.id).subscribe(assi => {
          this.userService.getSingleUser(storyReporter.id).subscribe(re => {
            this.sprintService.getSingleSprint(storySprint.id).subscribe(spr => {
              let newStory = new Story(
                  this.addStoryForm.get('storyName').value,
                  this.currentPro.id, this.currentPro.proName,
                  ep.id, ep.epicName, st.id, st.featureName, spr.id, spr.sprintName,
                  this.addStoryForm.get('storySummery').value,
                  this.addStoryForm.get('storyDescription').value,
                  this.addStoryForm.get('storyPoints').value,
                  this.addStoryForm.get('storyStartDate').value,
                  this.addStoryForm.get('storyEndDate').value,
                  re.id, re.userFname, re.userLName,
                  assi.id, assi.userFname, assi.userLName,
                  this.addStoryForm.get('storyStatus').value,
                  new Date(), null
              );

              this.storyService.createNewStory(newStory).subscribe(
                  res => this.displaySuccessMessageView(),
                  error1 => this.displayErrorMsgView()
              );

              setTimeout(() => {
                this.storyService.getAllStories().subscribe(
                    re => this.storyService.changeStory(re)
                );}, 2000);
            })
          });
        });
      });
    });
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
    this.addStoryForm.reset();
  }
}
