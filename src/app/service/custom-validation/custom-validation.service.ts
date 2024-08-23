import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidationService {

  constructor() { }

   public createDateOfPurchaseValidator() : ValidatorFn{
    return(control:AbstractControl) :ValidationErrors | null => {
      //lets assume the company started on feburary 1st 2016
      //the date of purchase needs to be between 2016 and the current day.
      //it cannot be before 02-01-2016 and after current day.

      //two checkpoints are Date.now() and 2016 02 01;
      let current = Date.now();
      let beginningOfBusiness = new Date(2016,2,1).getTime();

      const orderDate : Date = new Date(control.value);

      
      const value = orderDate.getTime();

      if(!value){
        return null;
      }

      //all these values check the date, not the specific time.
      const isAfterBusinessOpening = value > beginningOfBusiness;

      const isNotAfterToday = value <= current;

      const isOrderValid = isNotAfterToday && isAfterBusinessOpening;

      return isOrderValid ? null : {orderNotValid : true};

    }
  }

  //create validator for order number

  public createOrderNumberValidator() : ValidatorFn{
    return(control:AbstractControl) : ValidationErrors | null => {
      const value : string = control.value.toString();
      const valueSplit = value.substring(0,3);
      
      let hasValidDigits = value.length == 8 ? true : false;
      let hasValidStart  = valueSplit == "110" ? true : false;

      const isOrderValid = hasValidDigits && hasValidStart;
      return isOrderValid ? null : {orderNumberNotValid : true}
    }
  }


  //create validator for price input.

  public createPriceValidator() : ValidatorFn{
    return(control:AbstractControl) : ValidationErrors | null => {
      
      const value = control.value;
      
      let hasValidPrice = value < 5000 ? false : true;

      
      return hasValidPrice ? null : {orderPriceNotValid : true}
    }
  }
}
