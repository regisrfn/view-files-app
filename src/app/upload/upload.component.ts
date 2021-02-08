import { Component, OnInit } from '@angular/core';
import { FileService } from '../shared/file.service';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit {
  formData = new FormData()

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
  }

  selectFiles(input: HTMLInputElement) {
    const files = input.files
    if (files)
      for (let i = 0; i < files.length; i++)
        this.formData.append("files", files[i])
  }

  uploadFiles() {
    this.fileService.saveFile(this.formData)
      .then()
      .catch(err => console.log(err))
  }



}
