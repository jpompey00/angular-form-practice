import { Injectable, output } from '@angular/core';
import { EntryForm } from '../../model/entry-form';
import { Route, Router} from '@angular/router';
import { EntryFormComponent } from '../../entry/entry-form/entry-form.component';
import { EntryListingsComponent } from '../../entry/entry-listings/entry-listings.component';



@Injectable({
  providedIn: 'root'
})
export class EntryService {
  constructor(
    private router:Router,
  ) { }

  idToUpdate = 0;
  hasValuesToUpdate : boolean = true;

  randomNameArray : string[] = [
    'Alice Johnson', 'Bob Smith', 'Charlie Brown', 'David Wilson', 'Eva Davis',
    'Frank Harris', 'Grace Martin', 'Hank Clark', 'Ivy Lewis', 'Jack Walker',
    'Karen Young', 'Leo Allen', 'Mia Scott', 'Nate Adams', 'Olivia King',
    'Paul Lee', 'Quinn Hall', 'Rachel White', 'Sam Green', 'Tina Lewis'
  ];
  randomEmailArray : string [] = [
    'alice.johnson@speedmail.com', 'bob.smith@speedmail.com', 'charlie.brown@speedmail.com', 'david.wilson@speedmail.com', 'eva.davis@speedmail.com',
    'frank.harris@speedmail.com', 'grace.martin@speedmail.com', 'hank.clark@speedmail.com', 'ivy.lewis@speedmail.com', 'jack.walker@speedmail.com',
    'karen.young@speedmail.com', 'leo.allen@speedmail.com', 'mia.scott@speedmail.com', 'nate.adams@speedmail.com', 'olivia.king@speedmail.com',
    'paul.lee@speedmail.com', 'quinn.hall@speedmail.com', 'rachel.white@speedmail.com', 'sam.green@speedmail.com', 'tina.lewis@speedmail.com'
  ];
  randomOrderNumberArray : number[] = [
    11000001, 11000023, 11001456, 11007890, 11012345,
    11023456, 11034567, 11045678, 11056789, 11067890,
    11078901, 11089012, 11090123, 11091234, 11092345,
    11093456, 11094567, 11095678, 11096789, 11097890
  ];

  randomPurchaseDateArray : string[] = [
    '2017-03-15', '2018-07-22', '2019-01-10', '2020-11-05', '2021-09-19',
    '2022-05-03', '2023-02-18', '2022-12-23', '2023-08-01', '2020-06-30',
    '2021-04-11', '2023-01-25', '2019-10-12', '2020-07-07', '2022-11-15',
    '2021-06-09', '2024-03-21', '2023-05-14', '2022-10-08', '2024-07-17'
  ];

  randomPriceAray: number[] = [    
    10500, 12000, 9500, 13000, 11000,
    14500, 10000, 12500, 15000, 13500,
    14000, 10500, 11500, 12200, 14800,
    10100, 11300, 12700, 14900, 12000];

  emptyForm : EntryForm = {
    customerName: "",
    customerEmail: "",
    dateOfPurchase: null,
    orderNumber: 0,
    orderPrice: 0
  };



  alertShown:boolean = false;

  public setAlert(value:boolean) : void{
    this.alertShown = value;
  }

  public loadRandomDatabase(){
    if(!this.alertShown && localStorage.length > 9){
      alert("Consider clearing Local Storage");
      this.alertShown = true;
    }
   
    for(let i = 0; i < 11; i++){

      let randomNameAndEmailValue = Math.floor(Math.random()* 20);

      this.emptyForm = {
        customerName: this.randomNameArray[randomNameAndEmailValue],
        customerEmail: this.randomEmailArray[randomNameAndEmailValue],
        dateOfPurchase: this.randomPurchaseDateArray[Math.floor(Math.random()*20)],
        orderNumber: this.randomOrderNumberArray[Math.floor(Math.random()*20)],
        orderPrice: this.randomPriceAray[Math.floor(Math.random()*20)]
      }
      //loads the values into the local storage
      console.log(this.emptyForm);
      localStorage.setItem(this.emptyForm.orderNumber.toString(), JSON.stringify(this.emptyForm))
    }
  }

  public clearLocalStorage(){
    localStorage.clear();
    alert("Local Storage Cleared");
  }


  //i know there are different ways to do this.
  public sendDataToUpdate(id:number){

    this.router.navigate(['../create']);

    this.hasValuesToUpdate = true;
    this.idToUpdate = id;
  }


}
