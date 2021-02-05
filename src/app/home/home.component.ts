import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { File } from '../shared/file.model';
import { FileService } from '../shared/file.service';
import { Page } from '../shared/page.model';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  filesList: File[] = []
  page = new Page

  constructor(private fileService: FileService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.setFilesList(this.route.snapshot.params['pageNumber'] || 0)
  }

  private setFilesList(pageNumber: number) {
    this.fileService.getPage(pageNumber)
      .then((filesPage) => {
        this.page = filesPage as Page
        this.filesList = this.page.filesList
      })
      .catch(err => { })
  }

  getContentType(content: string | undefined) {
    content = content?.split('/')[0]
    return content
  }

  nextPage() {    
    this.router.navigate([`orders/${this.page.pageNumber+1}`])
    this.setFilesList(this.page.pageNumber+1)
  }

  previousPage() {    
    this.router.navigate([`orders/${this.page.pageNumber-1}`])
    this.setFilesList(this.page.pageNumber-1)
  }

  trackByFn(index: any, item: any) {
    return index
  }

}
