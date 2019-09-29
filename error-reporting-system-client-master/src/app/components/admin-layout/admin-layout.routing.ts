import { Routes } from '@angular/router';

import { DashboardComponent } from '../dashboard/dashboard.component';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import {AppTestCaseComponent} from '../app-test-case/app-test-case.component';
import {FeatureComponent} from '../feature/feature.component';
import {AppProjectsComponent} from '../app-projects/app-projects.component';
import {AppUsersComponent} from '../app-users/app-users.component';
import {EpicComponent} from '../epic/epic.component';
import {AuthGuard} from '../../guards/AuthGuard';
import {AppBugsComponent} from '../app-bugs/app-bugs.component';
import {AppStoryComponent} from '../app-story/app-story.component';
import {AppSprintBoardComponent} from '../app-sprint-board/app-sprint-board.component';
import {AppWelcomeComponent} from '../app-welcome/app-welcome.component';

export const AdminLayoutRoutes: Routes = [
    {
        path: '',
        component: AppWelcomeComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'dashboard',
        component: DashboardComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'sprintBoard',
        component: AppSprintBoardComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'epic',
        component: EpicComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'feature',
        component: FeatureComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'story',
        component: AppStoryComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'testCase',
        component: AppTestCaseComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'bug',
        component: AppBugsComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'manageEmp',
        component: AppUsersComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'managePro',
        component: AppProjectsComponent,
        // canActivate: [AuthGuard]
    },
    {
        path: 'user-profile',
        component: UserProfileComponent,
        // canActivate: [AuthGuard]
    },
];
