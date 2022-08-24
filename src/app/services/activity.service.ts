import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IApiResponse } from '../interfaces/general';
import { Activity } from '../models/activity.model';

@Injectable({
  providedIn: 'root',
})
export class ActivityService {
  private activity: BehaviorSubject<Activity[]> = new BehaviorSubject<
    Activity[]
  >([]);

  constructor(private http: HttpClient) {}

  fetchActivity() {
    this.http
      .get<IApiResponse<Activity[]>>(`${environment.apiUrl}/activity`)
      .pipe(tap((res) => this.activity.next(res.body)))
      .subscribe();
  }

  getActivitiy() {
    return this.activity.asObservable();
  }
}
