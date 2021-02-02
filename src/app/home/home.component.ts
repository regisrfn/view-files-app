import { Component, OnInit } from '@angular/core';
import { File } from '../shared/file.model';
import { FileService } from '../shared/file.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesList: File[] = []

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.setFilesList()
  }

  private setFilesList() {
    this.fileService.getFilesList()
      .then((filesList) => {
        this.filesList = filesList as File[]
      })
      .catch(err => { })
  }

  getContentType(content: string | undefined) {
    content = content?.split('/')[0]
    return content
  }

  trackByFn(index: any, item: any) {
    return index
  }

}
