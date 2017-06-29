export interface newSales{
    invoice_number
    currency_convrsion_rate:number;
    sales_date:string;
    due_date:string;
    country:string;
    notes:string;
    payment_terms:number;
    account_name:string;
    brokerName:string;
    brokerType:string;
    brokerage:number;
    comission1:number;
    comission2:number;
    purchase_amount_INR:number;
    purchase_amount_dolar:number;
    freight:number;
    sales_amount_INR:number;
    sales_amount_dolar:number;
    diff_amount_INR:number;
    diff_amount_dolar:number;
    salesDetails:salesDetails[];
}

export interface salesDetails{
    less1:number;
    less2:number;
    less3:number;
    sale_disc:number;
    sale_rate:number;
}