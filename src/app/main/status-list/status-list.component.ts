import { Component, OnInit } from '@angular/core';
import { StatusService, status } from 'src/app/services/status.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
  styleUrls: ['./status-list.component.css'],
})
export class StatusListComponent implements OnInit {
  currentPage: number;
  // represents the status list present on the view with the number of elements always less than or equal to page size
  currentStatusList: {
    title: string;
    concerns: string;
    status_read: boolean;
    task_done: string;
    status_id: string;
    next_week_plans: string;
    submit_time_stamp: string;
    managerial_remarks: string;
  }[];

  constructor(private statusService: StatusService) {
    this.currentPage = 0;
    this.currentStatusList = [];
  }

  ngOnInit(): void {
    this.statusService.lastStatusID = '-1';
    this.fetchStatus();
  }

  convertDate(stamp: string): string {
    const date = stamp
      .slice(0, stamp.indexOf(' '))
      .split('-')
      .reverse()
      .join('/');
    const time =
      stamp.slice(stamp.indexOf(' '), stamp.indexOf(':')) +
      stamp
        .slice(stamp.indexOf(':') + 1)
        .slice(
          stamp.slice(stamp.indexOf(':') + 1).indexOf(':'),
          stamp.slice(stamp.indexOf(':') + 1).indexOf('.')
        );
    return date + time;
  }

  // api call to get status
  fetchStatus() {
    this.statusService.getStatusList().subscribe(
      (statusList) => {
        // to update current view -------------
        statusList[0].map((status) => {
          status.submit_time_stamp = this.convertDate(status.submit_time_stamp);
        });
        this.currentStatusList = [...statusList[0]];
        //-----------------------------------

        // to update fullStatusListID if needed------------------
        if (
          !this.statusService.fullStatusListID.includes(
            this.currentStatusList[this.currentStatusList.length - 1].status_id
          )
        ) {
          this.statusService.fullStatusListID.push(
            this.currentStatusList[this.currentStatusList.length - 1].status_id
          );
        }
        //----------------------------------------------------
      },
      (error) => {
        console.log(error);
      }
    );
  }

  nextPage() {
    this.currentPage++;

    // status id of last element of previous page
    this.statusService.lastStatusID =
      this.statusService.fullStatusListID[this.currentPage];
    this.fetchStatus();
  }
  prevPage() {
    this.currentPage--;
    // status id of last element of previous to previous page
    this.statusService.lastStatusID =
      this.statusService.fullStatusListID[this.currentPage];
    this.fetchStatus();
  }

  filterStatus(type: 'thisMonth' | 'lastMonth' | 'custom') {
    const currentDate = new Date();

    if (type === 'thisMonth') {
    }
  }
}
