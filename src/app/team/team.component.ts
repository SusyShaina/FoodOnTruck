import { Component, OnInit } from '@angular/core';

@Component({
  selector: '',
  templateUrl: './team.html',
  styleUrls: [ './team.css', './popover.css', './colorbox.css' ]
})
export class TeamComponent implements OnInit {
  ngOnInit() {
    (<any>$(".memberName")).colorbox({
        inline:true,
        width:"100%",
        maxWidth:766,
        top:20,
        transition: "none", 
        fadeOut: 0,
        onLoad: function() {
          $("#cboxOverlay").hide();
          $("#cboxTopLeft").hide();
          $("#cboxTopRight").hide();
          $("#cboxBottomLeft").hide();
          $("#cboxBottomRight").hide();
          $("#cboxMiddleLeft").hide();
          $("#cboxMiddleRight").hide();
          $("#cboxTopCenter").hide();
          $("#cboxBottomCenter").hide();
          $('#cboxClose').remove();
        }
    });
  }
  close() {
    (<any>$).colorbox.close();
  }
}
