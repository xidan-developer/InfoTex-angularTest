import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecordService {
  public data = [
    { id: 1, text: `<p>1</p><p>record</p>`, image: 'img/image.png', timestamp: '18.01.2024 17:24' },
    { id: 2, text: `<p>2</p>`, image: 'img/image.png', timestamp: '18.01.2024 17:24' },
    { id: 3, text: `<p>3</p>`, image: 'img/image.png', timestamp: '18.01.2024 17:24' }
  ];
  constructor() {
    this.data = this.data.slice().reverse()
  }
  getData(): Observable<any> {
    return of(this.data);
  }

  addData(record,times): Observable<any> {
    let date = new Date(times);
    let qweqwe =  ('0' + date.getDate()).slice(-2) + '.' + ('0' + (date.getMonth() + 1)).slice(-2) + '.' + date.getFullYear() + ' ' + ('0' + date.getHours()).slice(-2) + ':' + ('0' + date.getMinutes()).slice(-2);
    const index = this.data.length
    this.data.unshift({ id: index + 1, text: `${record}`, image: record.description, timestamp: qweqwe });
    console.log(this.data)
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
