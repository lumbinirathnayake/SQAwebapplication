import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/templates/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './components/admin-layout/admin-layout.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import {MatButtonModule, MatCheckboxModule, MatFormFieldModule, MatIconModule, MatProgressSpinnerModule} from '@angular/material';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {JwtInterceptor} from './helpers/JwtInterceptor';
import {ErrorInterceptor} from './helpers/ErrorInterceptor';
import { AddSprintComponent } from './components/app-sprint/add-sprint/add-sprint.component';
import { EditSprintComponent } from './components/app-sprint/edit-sprint/edit-sprint.component';
import {DatePipe} from '@angular/common';
import { EpicSearchPipe } from './_pipe/search/epic-search.pipe';
import { FeaturePipe } from './_pipe/search/feature.pipe';
import { StoryPipe } from './_pipe/search/story.pipe';
import { TestCasePipe } from './_pipe/search/test-case.pipe';
import { BugPipe } from './_pipe/search/bug.pipe';
import { EmployeePipe } from './_pipe/search/employee.pipe';
import { ProjectsPipe } from './_pipe/search/projects.pipe';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { AppWelcomeComponent } from './components/app-welcome/app-welcome.component';

@NgModule({
    imports: [
        BrowserAnimationsModule,
        FormsModule,
        HttpClientModule,
        ComponentsModule,
        RouterModule,
        AppRoutingModule,
        MatCheckboxModule,
        MatButtonModule,
        MatIconModule,
        AngularFontAwesomeModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatProgressSpinnerModule,
    ],
    declarations: [
        AppComponent,
        AdminLayoutComponent,
        UserLoginComponent,
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        DatePipe
    ],
    exports: [
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
