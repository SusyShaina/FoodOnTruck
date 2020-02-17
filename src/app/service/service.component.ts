import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { DownloadService } from "./download.service";

import * as FileSaver from 'file-saver';

@Component({
  selector: '',
  templateUrl: './service.html',
  styleUrls: [ './service.css', './animate.css' ],
  providers: [ DownloadService ]
})
export class ServiceComponent {
  constructor(private api: DownloadService) {}
    
  downloadFile() {
    /*this.http.get('./assets/SampleMenu.pdf').subscribe(
      (response) => {
        var mediaType = 'application/pdf';
        var blob = new Blob([response], {type: mediaType});
        var filename = 'SampleMenu.pdf';
        saveAs(blob, filename);
      });*/
     this.api.getFile("./assets/SampleMenu.pdf")
          .subscribe(fileData => FileSaver.saveAs(fileData, "SampleMenu.pdf"));
     }
}
