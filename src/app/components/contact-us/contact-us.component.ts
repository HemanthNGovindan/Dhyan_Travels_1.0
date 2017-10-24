import { Component, OnInit } from '@angular/core';
import { Customer, Vehicle, EnquiryRequest, ContactUsRequest } from '../../models/models';
import { APIService } from '../../functions/api/services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateField } from '../../functions/directives';
import { CustomValidationRules, ValidationMessages, ApplicationConstants } from '../../functions/constants';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent implements OnInit {
  public contactUsRequestObject: ContactUsRequest;
  public contactUsForm: FormGroup;
  public clientInfoTableClass: string[];
  private validationMessages = ValidationMessages;
  private Submitted: boolean = false;
  constructor(private fb: FormBuilder, public APIService: APIService) {
      this.contactUsRequestObject = new ContactUsRequest(new Customer('', '', ''));
      this.clientInfoTableClass = ["clientInfoTable"]
  }
  ngOnInit() {
      this.buildForm();
  }

  buildForm(): void {
      this.Submitted = false;
      this.contactUsForm = this.fb.group({
          'FullName': [this.contactUsRequestObject.Customer.FullName, [Validators.required, ValidateField(new CustomValidationRules('FullName'), this.contactUsForm)]],
          'PhoneNumber': [this.contactUsRequestObject.Customer.PhoneNumber, [Validators.required, ValidateField(new CustomValidationRules('PhoneNumber'), this.contactUsForm)]],
          'EmailId': [this.contactUsRequestObject.Customer.EmailId, [Validators.required, ValidateField(new CustomValidationRules('EmailId'), this.contactUsForm)]]
      });
  }

  public ContactUsText = "Contact Us";
  NavigateToFacebook() {
      window.open("https://www.facebook.com/cocacola", "_blank");
  }

  ReturnValid = function (controlName: string) {
      var returnValue = '';
      if (controlName !== "") {
          if (this.contactUsForm.controls[controlName].errors !== null) {
              if (this.contactUsForm.controls[controlName].errors.message !== undefined) {
                  return this.contactUsForm.controls[controlName].errors.message;
              }
              else if (this.contactUsForm.controls[controlName].errors.required === true && this.Submitted) {
                  return this.validationMessages.Messages[controlName + '_Required'];
              }
              else {
                  '';
              }
          }
      }
  }

  SubmitContactRequest = function (action: string) {
      if (action === ApplicationConstants.CustomerAction.SUBMIT) {
          this.Submitted = true;
          if (this.contactUsForm.valid) {
              this.contactUsRequestObject.Customer = new Customer(this.contactUsForm.FullName, this.contactUsForm.PhoneNumber, this.contactUsForm.EmailId);
              console.log(this.contactUsRequestObject);
          }
      }
      else if (action === ApplicationConstants.CustomerAction.CLEAR) {
          this.buildForm();
      }
      return;
  }

}
