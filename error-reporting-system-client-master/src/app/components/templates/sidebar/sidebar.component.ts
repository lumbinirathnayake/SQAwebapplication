import { Component, OnInit } from '@angular/core';
import {ProjectsService} from '../../../services/projects.service';
import {Projects} from '../../../models/Projects';
import {CommonService} from '../../../services/common.service';
import {el} from '@angular/platform-browser/testing/src/browser_util';
import {User} from '../../../models/User';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: 'dashboard', title: 'Dashboard',  icon: 'dashboard', class: 'User' },
    { path: 'sprintBoard', title: 'Sprint Board',  icon:'description', class: 'User' },
    { path: 'epic', title: 'Epic',  icon:'bubble_chart', class: 'User' },
    { path: 'feature', title: 'Feature',  icon:'featured_video', class: 'User' },
    { path: 'story', title: 'Story',  icon:'speaker_notes', class: 'User' },
    { path: 'testCase', title: 'Test Case',  icon:'developer_board', class: 'User'},
    { path: 'bug', title: 'Bug',  icon:'bug_report', class: 'User' },
    { path: 'manageEmp', title: 'Manage Employees',  icon:'people', class: 'Admin' },
    { path: 'managePro', title: 'Manage Projects',  icon:'add_to_photos', class: 'Admin' },
    { path: 'user-profile', title: 'User Profile',  icon:'person', class: 'User' },
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  menuItems: any[];


  constructor(private projectService: ProjectsService,
              private commonService: CommonService) { }

    userProjects: Projects[];
  selectedProject: Projects;
  displayProjectName = 'Please select a project';
    displayNav = false;
    displayProjectMenu = true;
    currentUser: User;
  ngOnInit() {
    this.commonService.currentUser.subscribe(user => {
       this.userProjects = user.userProjects;
       this.currentUser = user;

       this.menuItems = ROUTES.filter(menuItem => menuItem);
       if (this.userProjects === null) {
           this.displayProjectMenu = true;
           this.displayProjectName = 'No Projects to display';
       } else
           this.displayProjectMenu = false;
    });
  }

    displayItem(menuItem: any) {
      if (this.currentUser.userType === 'User') {
          if (menuItem.class === 'Admin')
              return false;
          else
              return true;
      } else
          return true;

      console.log(menuItem);
    }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };

    changeProject(pro: Projects) {
        this.displayNav = true;
        this.displayProjectName = pro.proName;
        this.selectedProject = pro;
        this.commonService.changeProject(pro);
  }
}
