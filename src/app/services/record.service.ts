import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RecordService {
  test:any

  public data = [
    { id: 1, text: {
        "time": 1705897297019,
        "blocks": [
          {
            "id": "M_t6uZThAS",
            "type": "paragraph",
            "data": {
              "text": "zzzzzzzzzzzzzz"
            }
          },
          {
            "id": "EekLAMN7qS",
            "type": "paragraph",
            "data": {
              "text": "aaaaaaaaaaaaaaa"
            }
          }
        ],
        "version": "2.25.0"
      }, image: 'img/image.png', timestamp: '18.01.2024 17:23' },
    { id: 2, text: {
        "time": 1705897297019,
        "blocks": [
          {
            "id": "M_t6uZThAS",
            "type": "paragraph",
            "data": {
              "text": "asdasdasdasdasd"
            }
          }
        ],
        "version": "2.25.0"
      }, image: 'img/image.png', timestamp: '18.01.2024 17:20' },
    { id: 3, text: {
        "time": 1705897297019,
        "blocks": [
          {
            "id": "M_t6uZThAS",
            "type": "paragraph",
            "data": {
              "text": "asdasdasdasdasd"
            }
          }
        ],
        "version": "2.25.0"
      }, image: 'img/image.png', timestamp: '18.01.2024 17:24' }
  ];

  constructor() {
    this.data = this.data.sort((a:any, b:any) =>
      this.convertTime(b.timestamp) - this.convertTime(a.timestamp)
    );
  }

  convertTime(times):any {
    const dateParts = times.split(' ');
    const datePart = dateParts[0].split('.').reverse().join('/');
    const timePart = dateParts[1];
    const dateObject = new Date(datePart + ' ' + timePart);
    const unixTime = dateObject.getTime() / 1000;
    return unixTime;
  }

  getData(): Observable<any> {
    this.test = this.data
    return of(this.test);
  }

  addData(record,times): Observable<any> {
    let date = new Date(times);
    let getDate =  ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    const index = this.data.length
    this.data.unshift({ id: index + 1, text: record, image: 'img/image.png', timestamp: getDate });
    return of(this.data);

  }

  updateData(record): Observable<any> {
    const index = this.data.findIndex(r => r.id === record.id);
    this.data[index] = record;
    return of(this.data);
  }

  deleteData(id): Observable<any> {
    const index = this.data.findIndex(r => r.id === id);
    this.data.splice(index, 1);
    return of(this.data);
  }
}
