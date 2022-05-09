import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FakeLoadingService {

  constructor() { }

  loadingWithPromise(username: string, password: string): Promise<boolean> {
    return new Promise((resolve, reject) => {
      let i = 0;
      setTimeout(() => {
        if (username === 'test' && password === 'test') {
          resolve(true);
        } else {
          reject(false);
        }
      }, 3000);
    });
  }
}
