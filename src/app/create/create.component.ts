
import { AfterViewInit, Component, ElementRef ,OnInit,ViewChild  } from '@angular/core';
import EditorJS  from "@editorjs/editorjs";
import Underline from '@editorjs/underline';
import { RecordService } from '../services/record.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.sass']
})
export class CreateComponent implements OnInit,AfterViewInit{
  records: any = [];
  record: any = {};

  constructor(public recordService: RecordService) {
  }

  ngOnInit() {

  }
  private editor: EditorJS;


  ngAfterViewInit(){
    this.initializeEditor();
  }

  private initializeEditor(): void {
    this.editor = new EditorJS({
      placeholder: 'Добавьте блок',
      minHeight: 0,
      holder: 'editor',
      tools: {
        underline: Underline,
      }
    });


  }

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


  addRecord(): void {

    this.editor.save().then(dataBig => {

      this.recordService.addData(this.convertDataToHtml(dataBig),dataBig.time).subscribe(data => {

      });
    })

  }
}

