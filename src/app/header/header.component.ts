import { Component, ViewChild, OnInit } from '@angular/core';
import { ModalDirective } from 'angular-bootstrap-md/modals';
import { WindowService } from './window.service';
import * as firebase from 'firebase';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.css' ],
  providers: [ WindowService ]
})
export class HeaderComponent implements OnInit {
    windowRef: any;
    phoneNumber: string;
    verificationCode: string;
    user: any;
  
    constructor(private win: WindowService) { }
    ngOnInit() {
      this.windowRef = this.win.windowRef
      this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container')
      this.windowRef.recaptchaVerifier.render()
    }
  
  @ViewChild('autoShownModal') public autoShownModal:ModalDirective;
  public isModalShown:boolean = true;
   
  public showModal():void {
      this.isModalShown = true;
  }
   
  public hideModal():void {
      this.autoShownModal.hide();
  }
   
  public onHidden():void {
      this.isModalShown = false;
  }

  sendLoginCode() {
    const appVerifier = this.windowRef.recaptchaVerifier;
    const num = "+91" + this.phoneNumber;
    console.log(num);
    firebase.auth().signInWithPhoneNumber(num, appVerifier)
        .then(result => {
            this.windowRef.confirmationResult = result;
        })
        .catch( error => console.log(error) );
  }

  verifyLoginCode() {
    this.windowRef.confirmationResult
        .confirm(this.verificationCode)
        .then( result => {
            this.user = result.user;
        })
    .catch( error => console.log(error, "Incorrect code entered?"));
  }
}