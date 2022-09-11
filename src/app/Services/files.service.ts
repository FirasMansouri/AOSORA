import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FilesService {

  constructor(private http: HttpClient) { }


  UploadFile(fd){
    return this.http.post<any>(environment.endpoints.file.UploadFile, fd, {reportProgress: true, observe: 'events'});
  }

  getFile(serverPath:string){
    return this.http.get(environment.endpoints.file.getFile+serverPath);
  }
}
