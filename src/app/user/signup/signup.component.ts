import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {ToastrService} from 'ngx-toastr'
import { AppService } from '../../app.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public firstName: any;
  public lastName: any;
  public mobile: any;
  public email: any;
  public password: any;
  public apiKey: any;

  constructor(
    public appService: AppService,
    public router: Router,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
  }

  public goToSignIn: any = () => {
    this.router.navigate(['/'])
  }

  public signupFunction: any = () => {
    if (!this.firstName) {
      this.toastr.error('Error!', 'Please provide a first name.');

    } else if (!this.lastName) {
      this.toastr.error('Error!', 'Please provide a last name.');

    } else if (!this.mobile) {
      this.toastr.error('Error!', 'Please provide a phone number.');

    } else if (!this.email) {
      this.toastr.error('Error!', 'Please provide a email address');

    } else if (!this.password) {
      this.toastr.error('Error!', 'Please provide a password.');

    } else if (!this.apiKey) {
      this.toastr.error('Error!', 'Please provide a apiKey.');

    } else {
      let data = {
        firstName: this.firstName,
        lastName: this.lastName,
        mobileNumber : this.mobile,
        email: this.email,
        password: this.password,
        apiKey: this.apiKey
      }
      console.log(data)

      this.appService.signupFunction(data)
        .subscribe((apiResponse) => {
          console.log(apiResponse);

          if(apiResponse.status == 200){
            this.toastr.success("Signup Successful")
            setTimeout(()=>{
              this.goToSignIn();
            })
          }else{
            this.toastr.error(apiResponse.message)
          }

        },(err) => {
          this.toastr.error('some error occurred')
        })
    }
  }

}
