import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserIdService {
  userId: number = 0;
  profileStatus: boolean = false;
  constructor() { }

  setProfileStatus(status: boolean) {
    this.profileStatus = status;
  }
  setUserId(id: number) {
    this.userId = id;
  }

  getUserId() {
    return this.userId;
  }

  getProfileStatus() {
    return this.profileStatus;
  }
}
