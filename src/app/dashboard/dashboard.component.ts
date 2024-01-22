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
  addTaskValueText : string = '';
  addTaskValueImage : string = '';
  recordTime : string = '';



  ngAfterViewInit(){

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
  //конвертирование в верстку
  convertDataToHtml(blocks): void {

    let convertedHtml: any = "";
    blocks.blocks.map((block: any) => {

      switch (block.type) {
        case "header":
          convertedHtml += `<h${block.data.level}>${block.data.text}</h${block.data.level}>`;
          break;
        case "embded":
          convertedHtml += `<div><iframe width="560" height="315" src="${block.data.embed}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>`;
          break;
        case "paragraph":
          convertedHtml += `<p>${block.data.text}</p>`;
          break;
        case "delimiter":
          convertedHtml += "<hr />";
          break;
        case "image":
          convertedHtml += `<img class="img-fluid" src="${block.data.file.url}" title="${block.data.caption}" /><br /><em>${block.data.caption}</em>`;
          break;
        case "list":
          convertedHtml += "<ul>";
          block.data.items.forEach(function(li) {
            convertedHtml += `<li>${li}</li>`;
          });
          convertedHtml += "</ul>";
          break;
        default:
          console.log("Unknown block type", block.type);
          break;
      }
    });
    return convertedHtml;
  }

  editRecord(record): void {

    this.record = record;
    this.addTaskValueImage = record.image;
    this.addTaskValueText = record.text;
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
