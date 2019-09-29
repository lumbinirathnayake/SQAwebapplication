import { Component, OnInit } from '@angular/core';
import * as Chartist from 'chartist';
import {TestCaseService} from '../../services/test-case.service';
import {EpicService} from '../../services/epic.service';
import {BugService} from '../../services/bug.service';
import {StoryService} from '../../services/story.service';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
    constructor(private testCaseService: TestCaseService,
                private epicService: EpicService,
                private bugService: BugService,
                private storyService: StoryService) { }


    totStoryCount = 0;
    totEpicCount = 0;
    totTestCaseCount = 0;
    totBugCount = 0;
    ngOnInit() {
        this.testCaseService.getAllTestCases().subscribe(tc => this.totTestCaseCount = tc.length);
        this.storyService.getAllStories().subscribe(st => this.totStoryCount = st.length);
        this.epicService.getAllEpics().subscribe(ep => this.totEpicCount = ep.length);
        this.bugService.getAllBugs().subscribe(bug => this.totBugCount = bug.length);

        let la: any = ['7/1', '7/2', '7/3', '7/4', '7/5', '7/6', '7/7'];
        /* ----------==========     Daily Sales Chart initialization For Documentation    ==========---------- */
        const dataDailySalesChart: any = {
            labels: la,
            series: [
                [12, 17, 7, 17, 23, 18, 38]
            ]
        };
        const optionsDailySalesChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            height: '300px',
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0},
        }
        var dailySalesChart = new Chartist.Line('#dailySalesChart', dataDailySalesChart, optionsDailySalesChart);
        this.startAnimationForLineChart(dailySalesChart);


        /* ----------==========     Completed Tasks Chart initialization    ==========---------- */
        const dataCompletedTasksChart: any = {
            labels: la,
            series: [
                [(50-12), (50-17), (50-7), (50-17), (50-23), (50-18), (50-38)]
            ]
        };
        const optionsCompletedTasksChart: any = {
            lineSmooth: Chartist.Interpolation.cardinal({
                tension: 0
            }),
            low: 0,
            high: 50,
            height: '300px',
            chartPadding: { top: 0, right: 0, bottom: 0, left: 0}
        }
        var completedTasksChart = new Chartist.Line('#completedTasksChart', dataCompletedTasksChart, optionsCompletedTasksChart);
        this.startAnimationForLineChart(completedTasksChart);
    }

    startAnimationForLineChart(chart){
        let seq: any, delays: any, durations: any;
        seq = 0;
        delays = 80;
        durations = 500;

        chart.on('draw', function(data) {
            if(data.type === 'line' || data.type === 'area') {
                data.element.animate({
                    d: {
                        begin: 600,
                        dur: 700,
                        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
                        to: data.path.clone().stringify(),
                        easing: Chartist.Svg.Easing.easeOutQuint
                    }
                });
            } else if(data.type === 'point') {
                seq++;
                data.element.animate({
                    opacity: {
                        begin: seq * delays,
                        dur: durations,
                        from: 0,
                        to: 1,
                        easing: 'ease'
                    }
                });
            }
        });

        seq = 0;
    };

}
