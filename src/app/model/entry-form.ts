export interface EntryForm {
    customerName:String;
    customerEmail:String;

    //have to store this as a string.
    // dateOfPurchase:Date | null;
    dateOfPurchase: String | null;

    //
    orderNumber:number;
    orderPrice:number;
}
