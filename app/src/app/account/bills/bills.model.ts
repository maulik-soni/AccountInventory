export class Bills{
    constructor(
        public invoice_number:number,
        public invoice_value:number,
        public transaction_date:String,
        public transaction_mode:String,
        public transaction_type:String,
        public transaction_status:String,
        public account_name:String,
        public transaction_currency:String,
        public date:String,
        public due_date:String,
        public amount:number,
        public balance:number,
        public received:number,
        public payment_details?:String,
        public debit?:number,
        public credit?:number,
        public tranasaction_conversion_rate?:number
    ){}
}

export class Options{
    constructor(
        public transaction_mode:Array<String>,
        public transaction_type:Array<String>,
        public transaction_status:Array<String>,
        public transaction_currency:Array<String>,
        public account_name:Array<String>
    ){
        
    }
}