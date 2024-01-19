import {AfterViewInit, Component, OnInit} from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { RecordService } from '../services/record.service';
import EditorJS  from "@editorjs/editorjs";
import Underline from '@editorjs/underline';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.sass']
})
export class DashboardComponent implements OnInit,AfterViewInit{
  constructor(private authService: AuthService,public recordService: RecordService) {}

  records: any = [];
  record: any = {};
  isEdit = false;

  addTaskValueText : string = '';
  addTaskValueImage : string = '';
  recordTime : string = '';
  private editorEdit: EditorJS;

  ngAfterViewInit(){
    this.initializeEditor();
  }

  private initializeEditor(): void {

  }

  ngOnInit() {
    this.addTaskValueText = '';
    this.addTaskValueImage = '';
    this.recordTime = '';
    this.getData();

  }

  getData(): void {
    this.recordService.getData().subscribe(data => {
      this.records = data;

    });
  }

  convertDataToData(blocks): void {
    let convertedData: any = "";
    return convertedData;
  }


  editRecord(record): void {
    this.record = record;
    this.addTaskValueImage = record.image;
    this.addTaskValueText = record.text;
    this.isEdit = true;
  }

  updateRecord(): void {

    this.record.text = this.addTaskValueText
    this.record.image = this.addTaskValueImage
    this.recordService.updateData(this.record).subscribe(data => {
      this.isEdit = false;
      this.getData();
    });
  }

  deleteRecord(id): void {
    this.recordService.deleteData(id).subscribe(data => {
      this.getData();
    });
  }

  logOut() {
    this.authService.logOut();
  }

}
