import { Component } from '@angular/core';
import { MenuService } from "./menu.service";
import { Items } from "./menu.interface";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.html',
  styleUrls: [ './menu.css', './mdb.css', 'bootstrap.css' ],
  providers: [ MenuService ]
})
export class MenuComponent {
  southItemArray       : Items[];
  northItemArray       : Items[];
  asianItemArray       : Items[];
  continentItemArray   : Items[];
  refreshmentItemArray : Items[];
  platterArray         : Items[];
  selectedIndex : number;
  itemChecked = false;
  vegChecked = false;
  itemCount : any = 1;
  totalAmt : any = 0;
  
  constructor(private menuSerivce: MenuService) {
    this.getMenu(false);
    this.selectedIndex = 0;
  }

  getMenu(isVeg): void {
    this.menuSerivce.getMenu()
      .subscribe(
          resultArray => {
            console.log(isVeg);
            if (isVeg) {
              this.southItemArray       = resultArray.south.filter(
                item => item.isVeg === true);
              this.northItemArray       = resultArray.north;
              this.asianItemArray       = resultArray.asian;
              this.continentItemArray   = resultArray.continent;
              this.refreshmentItemArray = resultArray.juices;
              this.platterArray         = resultArray.platters;
            } else {
              this.southItemArray       = resultArray.south
              this.northItemArray       = resultArray.north;
              this.asianItemArray       = resultArray.asian;
              this.continentItemArray   = resultArray.continent;
              this.refreshmentItemArray = resultArray.juices;
              this.platterArray         = resultArray.platters;
            }
          },
          error => console.log("Error :: " + error)
      )
  }

  showVegMenu(event) {
    if ( event.checked ) { 
      this.getMenu(true);
    } else {
      this.getMenu(false);
    }
    this.selectedIndex = 0;
  }

  previousTab() {
    this.selectedIndex--;
    if (this.selectedIndex < 0) this.selectedIndex = 5;
  }

  nextTab() {
    this.selectedIndex++;
    if (this.selectedIndex > 5) this.selectedIndex = 0;
  }

  decreaseItemCount(event) {
    if( this.itemCount > 1) {
        this.itemCount--;
        this.setItemRate(event);
    }
  }

  increaseItemCount(event) {
      if( this.itemCount < 10) {
          this.itemCount++;
          this.setItemRate(event);
      }
  }

  setItemRate(event) {
    $(event.currentTarget).parent().find(".itemCount").html(this.itemCount);
    this.totalAmt = $(event.currentTarget).parent().parent().parent().find(".cost")[0].getAttribute("value");
    this.totalAmt = this.itemCount * this.totalAmt;
    $(event.currentTarget).parent().parent().parent().find(".cost").html(this.totalAmt);
  }

  checkboxSelectionChange(event, index, item) {
    console.log(event + index + item);
    if ( event.currentTarget.checked ) {
        this.itemCount = 1;
        $(event.currentTarget).parent().find(".timers").show();
    } else {
        $(event.currentTarget).parent().find(".timers").hide();
    }
  }
}
