export class Purchase { 
   constructor( 
      public invoice_number?: string, 
      public currency_convrsion_rate?:number,
      public aginst_Hform?:boolean,
      public days?:number,
      public purchase_date?:string,
      public due_date?:string,
      public country?:string,
      public notes?:string,
      public payment_terms?:string,
      public account_name?:string,
      public brokerName?:string,
      public brokerType?:string,
      public brokerage?:number,
      public PCS_ID?:number,
      public certificate_number?:string,
      public diamond_lot_number?:string,
      public diamond_shape?:string,
      public stock_status_group?:string,
      public diamond_color?:string,
      public item?:string,
      public diamond_size?:string,
      public kapan?:string,
      public LAB_type?:string,
      public total_diamond_pcs?:number,
      public total_diamond_carat?:number,
      public diamond_clarity?:string,
      public less?:{},
      public comission?:{},
      public cost_discount?:number,
      public cost_rate_per_carat?:number,
      public RAP_price?:number,
      public wd_rate?:number,
      public wd_rate_carat?:number,
      public rate_INR?:number,
      public rate_dolar?:number,
      public avg_INR?:number,
      public avg_dolar?:number,
      public amount_INR?:number,
      public amount_dolar?:number,
      public taxes?:string,
      public mVAT?:number
   ) {  } 
}