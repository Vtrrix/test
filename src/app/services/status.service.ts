import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface status {
  title: string;
  concerns: string;
  status_read: boolean;
  task_done: string;
  status_id: string;
  next_week_plans: string;
  submit_time_stamp: string;
  managerial_remarks: string;
}

@Injectable({
  providedIn: 'root',
})
export class StatusService {
  // represents the list of all the status ID fetched from api
  public fullStatusListID: string[];
  public lastStatusID: string;
  public pageSize: number;

  constructor(private http: HttpClient) {
    this.fullStatusListID = ['-1'];
    this.pageSize = 6;
    this.lastStatusID = '-1';
  }

  getStatusList() {
    return this.http.get<[status[], number]>(
      `https://pa4favllgg.execute-api.ap-south-1.amazonaws.com/prod/${localStorage.getItem(
        'username'
      )}/statuses?key=${this.lastStatusID}&limit=${this.pageSize}`,
      {
        headers: new HttpHeaders({
          token: `${localStorage.getItem('token')}`,
        }),
      }
    );
  }
}