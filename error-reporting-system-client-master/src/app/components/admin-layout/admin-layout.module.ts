import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';

import {AddTestCaseComponent} from '../app-test-case/add-test-case/add-test-case.component';
import {AppTestCaseComponent} from '../app-test-case/app-test-case.component';

import {
    MatButtonModule,
    MatInputModule,
    MatRippleModule,
    MatFormFieldModule,
    MatTooltipModule,
    MatSelectModule,
    MatDialogModule,
    MatExpansionModule,
    MatIconModule,
    MatDatepicker,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    MatTableModule,
    MatChipsModule,
    MatAutocompleteModule,
    MatTabsModule,
    MatCheckboxModule,
    MatBadgeModule,
    MatSidenavModule,
    MatListModule, MatMenuModule, MatProgressBarModule
} from '@angular/material';
import {FeatureComponent} from '../feature/feature.component';
import {AddFeatureComponent} from '../feature/add-feature/add-feature.component';
import {AppProjectsComponent} from '../app-projects/app-projects.component';
import {AddProjectsComponent} from '../app-projects/add-projects/add-projects.component';
import {AppUsersComponent} from '../app-users/app-users.component';
import {AddUsersComponent} from '../app-users/add-users/add-users.component';
import {EditFeatureComponent} from '../feature/edit-feature/edit-feature.component';
import {EditProjectsComponent} from '../app-projects/edit-projects/edit-projects.component';
import {EpicComponent} from '../epic/epic.component';
import {AddEpicComponent} from '../epic/add-epic/add-epic.component';
import {EditEpicComponent} from '../epic/edit-epic/edit-epic.component';
import {EditUsersComponent} from '../app-users/edit-users/edit-users.component';
import {AddTestCaseGroupComponent} from '../app-test-case/add-test-case-group/add-test-case-group.component';
import {EditTestCaseComponent} from '../app-test-case/edit-test-case/edit-test-case.component';
import {AddBugsComponent} from '../app-bugs/add-bugs/add-bugs.component';
import {EditBugsComponent} from '../app-bugs/edit-bugs/edit-bugs.component';
import {AppBugsComponent} from '../app-bugs/app-bugs.component';
import {AppStoryComponent} from '../app-story/app-story.component';
import {AddStoryComponent} from '../app-story/add-story/add-story.component';
import {EditStoryComponent} from '../app-story/edit-story/edit-story.component';
import {AppSprintBoardComponent} from '../app-sprint-board/app-sprint-board.component';
import {AddTasksComponent} from '../app-tasks/add-tasks/add-tasks.component';
import {EditTasksComponent} from '../app-tasks/edit-tasks/edit-tasks.component';
import {ViewTasksComponent} from '../app-tasks/view-tasks/view-tasks.component';
import {AddSprintComponent} from '../app-sprint/add-sprint/add-sprint.component';
import {EditSprintComponent} from '../app-sprint/edit-sprint/edit-sprint.component';
import {EpicSearchPipe} from '../../_pipe/search/epic-search.pipe';
import {AppModule} from '../../app.module';
import {FeaturePipe} from '../../_pipe/search/feature.pipe';
import {StoryPipe} from '../../_pipe/search/story.pipe';
import {TestCasePipe} from '../../_pipe/search/test-case.pipe';
import {BugPipe} from '../../_pipe/search/bug.pipe';
import {EmployeePipe} from '../../_pipe/search/employee.pipe';
import {ProjectsPipe} from '../../_pipe/search/projects.pipe';
import {AppWelcomeComponent} from '../app-welcome/app-welcome.component';


@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(AdminLayoutRoutes),
        FormsModule,
        MatButtonModule,
        MatRippleModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatTooltipModule,
        MatDialogModule,
        MatExpansionModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatCardModule,
        MatTableModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatAutocompleteModule,
        MatTabsModule,
        MatCheckboxModule,
        MatBadgeModule,
        MatSidenavModule,
        MatListModule,
        MatMenuModule,
        MatProgressBarModule
    ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
      AddTestCaseComponent,
      AppTestCaseComponent,
      FeatureComponent,
      AddFeatureComponent,
      AddFeatureComponent,
      AppProjectsComponent,
      AddProjectsComponent,
      AppUsersComponent,
      AddUsersComponent,
      EditFeatureComponent,
      EditProjectsComponent,
      EpicComponent,
      AddEpicComponent,
      EditEpicComponent,
      EditUsersComponent,
      AddTestCaseGroupComponent,
      EditTestCaseComponent,
      AddBugsComponent,
      EditBugsComponent,
      AppBugsComponent,
      AppStoryComponent,
      AddStoryComponent,
      EditStoryComponent,
      AppSprintBoardComponent,
      AddTasksComponent,
      EditTasksComponent,
      ViewTasksComponent,
      AddSprintComponent,
      EditSprintComponent,
      FeaturePipe,
      EpicSearchPipe,
      StoryPipe,
      TestCasePipe,
      BugPipe,
      EmployeePipe,
      AppWelcomeComponent,
      ProjectsPipe,
  ],
    entryComponents: [
        AddTestCaseComponent,
        AddFeatureComponent,
        AddFeatureComponent,
        AddProjectsComponent,
        AddUsersComponent,
        EditFeatureComponent,
        EditProjectsComponent,
        AddEpicComponent,
        EditEpicComponent,
        EditUsersComponent,
        AddTestCaseGroupComponent,
        EditTestCaseComponent,
        AddBugsComponent,
        EditBugsComponent,
        AddStoryComponent,
        EditStoryComponent,
        AddTasksComponent,
        EditTasksComponent,
        ViewTasksComponent,
        AddSprintComponent,
        EditSprintComponent,
    ],
    exports: [
        RouterModule,
        FeaturePipe,
        EpicSearchPipe,
        StoryPipe,
        TestCasePipe,
        BugPipe,
        EmployeePipe,
        ProjectsPipe,
    ]
})

export class AdminLayoutModule {}
