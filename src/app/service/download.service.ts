import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, ResponseContentType } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';


@Injectable()
export class DownloadService {

  constructor(private http: Http) { }

  public getFile(path: string):Observable<any>{
      let options = new RequestOptions({responseType: ResponseContentType.Blob});
      
      return this.http.get(path, options)
        .map((response: Response) => <Blob>response.blob())              
        .catch(this.handleError);
  }
  handleError(arg0: any): any {
    throw new Error("Method not implemented.");
  }
}