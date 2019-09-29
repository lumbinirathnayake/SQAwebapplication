import {Component, Inject, OnInit} from '@angular/core';
import {FeatureService} from '../../../services/feature.service';
import {UserService} from '../../../services/user.service';
import {EpicService} from '../../../services/epic.service';
import {StoryService} from '../../../services/story.service';
import {CommonService} from '../../../services/common.service';
import {CommonJson} from '../../../models/other/CommonJson';
import {Observable} from 'rxjs';
import {User} from '../../../models/User';
import {Epic} from '../../../models/epic';
import {Feature} from '../../../models/feature';
import {Projects} from '../../../models/Projects';
import {map, startWith} from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material';
import {StoryDto} from '../../../models/dto/StoryDto';
import {Story} from '../../../models/Story';
import {Sprint} from '../../../models/Sprint';
import {SprintService} from '../../../services/sprint.service';

@Component({
  selector: 'app-edit-story',
  templateUrl: './edit-story.component.html',
  styleUrls: ['./edit-story.component.scss']
})
export class EditStoryComponent implements OnInit {
  constructor(
      private featureService: FeatureService,
      private userService: UserService,
      private epicService: EpicService,
      private storyService: StoryService,
      private sprintService: SprintService,
      private commonService: CommonService,
      @Inject(MAT_DIALOG_DATA) private storyDto: StoryDto) { }

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
  existingStory: Story;
  ngOnInit() {
    this.userService.getAllUsers().subscribe(fe =>  this.userAutocomplete(fe));
    this.commonService.currentProject.subscribe(pro => this.currentPro = pro);
    this.epicService.getAllEpics().subscribe(ep => this.epicAutocomplete(ep));
    this.featureService.getAllFeatures().subscribe(fea => this.featureAutocomplete(fea));
    this.storyService.getSingleStory(this.storyDto.id).subscribe(st => this.existingStory = st);
    this.sprintService.getAllSprints().subscribe(sp => {
      let spr: Sprint[] = [];
      for (let s of sp)
        if (s.sprintProjectId === this.currentPro.id)
          spr.push(s);
      this.sprintAutocomplete(spr)
    });
  }

  epicAutocomplete(epics: Epic[]) {
    this.filteredEpics = this.editStoryForm.get('storyEpic').valueChanges
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
    this.filteredFeatures = this.editStoryForm.get('storyFeature').valueChanges
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
    this.filteredAssignee = this.editStoryForm.get('storyAssignee').valueChanges
        .pipe(
            startWith<string | User>(''),
            map(value => typeof value === 'string' ? value : value.userFname),
            map(name => name ? this._filterUser(name, fe) : fe.slice())
        );
    this.filteredReporter = this.editStoryForm.get('storyReporter').valueChanges
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
    this.filteredSprints = this.editStoryForm.get('storySprint').valueChanges
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

  updateSuccessMsgView = false;
  editView = false;
  displayView = true;
  errorMsgView = false;
  deleteWarningView = false;
  deleteSuccessView = false;
  editStoryForm = new FormGroup({
    storyName: new FormControl(this.storyDto.storyName, [Validators.required]),
    storySummery: new FormControl(this.storyDto.storySummery, [Validators.required]),
    storyEpic: new FormControl(this.storyDto.storyEpic, [Validators.required]),
    storyDescription: new FormControl(this.storyDto.storyDescription),
    storyFeature: new FormControl(this.storyDto.storyFeature, [Validators.required]),
    storySprint: new FormControl(this.storyDto.storySprint, [Validators.required]),
    storyReporter: new FormControl(this.storyDto.storyReporter, [Validators.required]),
    storyAssignee: new FormControl(this.storyDto.storyAssignee, [Validators.required]),
    storyStatus: new FormControl(this.storyDto.storyStatus, [Validators.required]),
    storyPoints: new FormControl(this.storyDto.storyPoints, [Validators.required]),
    storyStartDate: new FormControl({value: this.storyDto.storyStartDate, disabled: true}, [Validators.required]),
    storyEndDate: new FormControl({value: this.storyDto.storyEndDate, disabled: true}, [Validators.required]),
  });

  updateStory() {
    if (this.editStoryForm.invalid)
      return;

    if (this.existingStory != undefined) {
      const epic: Epic = this.editStoryForm.get('storyEpic').value;
      const feature: Feature = this.editStoryForm.get('storyFeature').value;
      const sprint: Sprint = this.editStoryForm.get('storySprint').value;
      const assignee: User = this.editStoryForm.get('storyAssignee').value;
      const reporter: User = this.editStoryForm.get('storyReporter').value;

      this.existingStory.storyName = this.editStoryForm.get('storyName').value;
      this.existingStory.storyEpicId = epic.id;
      this.existingStory.storyEpicName = epic.epicName;
      this.existingStory.storyFeatureId = feature.id;
      this.existingStory.storyFeatureName = feature.featureName;
      this.existingStory.storySprintId = sprint.id;
      this.existingStory.storySprintName = sprint.sprintName;
      this.existingStory.storySummery = this.editStoryForm.get('storySummery').value;
      this.existingStory.storyDescription = this.editStoryForm.get('storyDescription').value;
      this.existingStory.storyPoints = this.editStoryForm.get('storyPoints').value;
      this.existingStory.storyStartDate = this.editStoryForm.get('storyStartDate').value;
      this.existingStory.storyEndDate = this.editStoryForm.get('storyEndDate').value;
      this.existingStory.storyReporterId = reporter.id;
      this.existingStory.storyReporterFName = reporter.userFname;
      this.existingStory.storyReporterLName = reporter.userLName;
      this.existingStory.storyAssigneeId = assignee.id;
      this.existingStory.storyAssigneeFName = assignee.userFname;
      this.existingStory.storyAssigneeLName = assignee.userLName;
      this.existingStory.storyStatus = this.editStoryForm.get('storyStatus').value;
      this.existingStory.storyUpdatedDate = new Date();

      this.storyService.updateStory(this.existingStory).subscribe(
          re => this.displaySuccessMessageView(),
          error1 => this.displayErrorView()
      );

      setTimeout(() => {
        this.storyService.getAllStories().subscribe(st => {
          this.storyService.changeStory(st);
        });}, 2000);

    } else
      this.displayErrorView();
  }

  deleteStory() {
    this.storyService.deleteEpic(this.storyDto.id).subscribe(
        re => this.displayDeleteSuccessView(),
        error1 => this.displayErrorView()
    );

    setTimeout(() => {
      this.storyService.getAllStories().subscribe(st => {
        this.storyService.changeStory(st);
      });}, 2000);
  }
  displaySuccessMessageView() {
    this.updateSuccessMsgView = true;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayWarningView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = true;
    this.deleteSuccessView = false;
  }
  displayDeleteSuccessView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = true;
  }
  displayErrorView() {
    this.updateSuccessMsgView = false;
    this.editView = false;
    this.displayView = false;
    this.errorMsgView = true;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  displayEditView() {
    this.updateSuccessMsgView = false;
    this.editView = true;
    this.displayView = false;
    this.errorMsgView = false;
    this.deleteWarningView = false;
    this.deleteSuccessView = false;
  }
  clearform() {
    this.editStoryForm.reset();
  }

}
