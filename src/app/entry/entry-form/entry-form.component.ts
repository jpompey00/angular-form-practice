import { Component, OnInit } from '@angular/core';
import { Form, FormGroup, FormBuilder, Validator, Validators } from '@angular/forms';
import { EntryForm } from '../../model/entry-form';
import { CustomValidationService } from '../../service/custom-validation/custom-validation.service';
import { routes } from '../entry.module';
import { EntryService } from '../../service/entry/entry.service';


@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrl: './entry-form.component.css'
})
export class EntryFormComponent implements OnInit {

  //TODO: add a way for it to check if the order already exists within the database.
  //is having all these variables here a good idea?

  //flag to check if the page is in update mode or new product mode.
  isUpdatingEntry = false;

  orderEntryForm:FormGroup = new FormGroup({});

  //is the only way to initalize this without a value like this?
  newEntryForm :EntryForm[] = [];

  //ok now its needed.
  formToEdit : EntryForm = {
    customerName: "",
    customerEmail: "",
    dateOfPurchase: null,
    orderNumber: 0,
    orderPrice: 0
  };

  isSubmitted : boolean = false;

  routes = routes;
  navBar: string[] = ["Home", "Create Listing", "Listings"]

  constructor(private formBuilder : FormBuilder,
    private customValidationService : CustomValidationService,
    private entryService : EntryService
  ){
  

  }


  ngOnInit(): void {
    
    //checks if the page redirect was done with intent to update
    if(this.entryService.hasValuesToUpdate){
      this.loadData(this.entryService.idToUpdate);
      console.log(this.isUpdatingEntry)
      console.log(this.entryService.idToUpdate)
      console.log(this.formToEdit);
      //This is what I need to work
      this.orderEntryForm.get("orderNumber")?.disable();


      this.entryService.hasValuesToUpdate = false;
      
    }

    //building the form through angular
    this.orderEntryForm = this.formBuilder.group({
      customerName: [this.formToEdit.customerName, [Validators.required,]],
      customerEmail: [this.formToEdit.customerEmail, [Validators.required, Validators.email]],
      dateOfPurchase: [this.formToEdit.dateOfPurchase, [
        Validators.required,
        this.customValidationService.createDateOfPurchaseValidator() //it works!
      ]],
      orderNumber: [this.formToEdit.orderNumber, [
        Validators.required,
        this.customValidationService.createOrderNumberValidator()
      ]],
      orderPrice: [this.formToEdit.orderPrice, [
        Validators.required,
        this.customValidationService.createPriceValidator()
      ]],
    })
    
  }

  
  onSubmit(){
    console.log(this.orderEntryForm.value);
    //add it all to the EntryForm arr if its all valid
    if(this.orderEntryForm.valid){
      
      //what leads to the html being printed out
      this.isSubmitted = true;
      this.isUpdatingEntry = false;
      //add it to the localStorage
      this.addToLocalStorage(this.orderEntryForm.value)
    }
  }



  //add it to the local storage to act as a database for testing purposes.
  addToLocalStorage(entry: EntryForm){
    let orderNumber : string = entry.orderNumber.toString();

    localStorage.setItem(orderNumber, JSON.stringify(entry));
  }


//load data to edit, if the redirect was for editing purposes.
  loadData(id:number){
    let entryJson:any =  localStorage.getItem(id.toString())
    let entryToUpdate = JSON.parse(entryJson);
    console.log(entryToUpdate);
    if(entryToUpdate != null){
      this.formToEdit = {
        customerName: entryToUpdate.customerName,
        customerEmail: entryToUpdate.customerEmail,
        dateOfPurchase: entryToUpdate.dateOfPurchase,
        orderNumber: entryToUpdate.orderNumber,
        orderPrice: entryToUpdate.orderPrice
      }
   

      this.isUpdatingEntry = true;
    }
    else{
      console.log("error");
    }
    

  }



}
