//our root app component
import {Component, Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject, Observable} from 'rxjs/Rx';
import 'rxjs/Rx';

@Injectable()
export class PingService {
  pingStream: Subject<number> = new Subject<number>();
  ping: number = 0;
  url: string = "/latency";
  
  constructor(private _http: HttpClient) {
    Observable.interval(5000)
      .subscribe((data) => {
        let timeStart: number = performance.now();
        
        this._http.get(this.url)
          .subscribe((data) => {
            let timeEnd: number = performance.now();
            
            let ping: number = timeEnd - timeStart;
            this.ping = ping;
            this.pingStream.next(ping);
          });
      });
  }
}