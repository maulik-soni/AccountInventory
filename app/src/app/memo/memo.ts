export class Memo { 
   constructor( 
      public memo_invoice_number?: number, 
      public no_of_days?:number,
      public date?:string,
      public account_name?:string,
      public broker?:string,
      public reference?:string,
      public PCS_ID?:string,
      public carats?:string,
      public Lot_Number?:number,
      public due_date?:string,
      public status?:string
   ) {  } 
}