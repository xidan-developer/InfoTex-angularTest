import { AfterViewInit, Component, ElementRef ,OnInit,ViewChild  } from '@angular/core';
import EditorJS  from "@editorjs/editorjs";
import Underline from '@editorjs/underline';
import { RecordService } from '../services/record.service';
import {DashboardComponent} from "../dashboard/dashboard.component";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.sass']
})
export class EditComponent implements OnInit,AfterViewInit{

  recordId: any;
  addTaskValueText : string = '';
  editTaskImage : string = '';
  constructor(public recordService: RecordService , private DashboardComponent: DashboardComponent) {
    this.editTaskImage = this.DashboardComponent.record.image
    this.recordId = this.DashboardComponent.record.id
  }





  ngOnInit() {

    this.initializeEditor(this.DashboardComponent.addTaskValueText)
  }

  ngAfterViewInit(){

  }

  private editorText: EditorJS;

  private initializeEditor(data): void {
    this.editorText = new EditorJS({
      placeholder: 'Добавьте блок',
      minHeight: 0,
      holder: 'editorText',
      tools: {
        underline: Underline,
      },
      data : data
    });
  }


  updateRecord(): void {
    this.editorText.save().then((outputData) => {

      this.DashboardComponent.record.text = outputData
      this.DashboardComponent.record.image = this.editTaskImage
      this.recordService.updateData(this.DashboardComponent.record).subscribe(data => {
        this.DashboardComponent.getData();
      });

    }).catch((error) => {
      console.log('Saving failed: ', error)
    });


  }
}
