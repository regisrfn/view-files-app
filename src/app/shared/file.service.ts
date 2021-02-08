import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  getFilesList() {
    return this.http.get(environment.apiFile + "/file").toPromise()
  }

  getPage(pageNumber: number, pageSize = 10) {
    return this.http.get(`${environment.apiFile}/page?number=${pageNumber}&size=${pageSize}`).toPromise();
  }

  saveFile(data: FormData) {
    return this.http.post(`${environment.apiFile}/savelist`, data).toPromise()
  }
}
