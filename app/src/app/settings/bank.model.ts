export class Bank{
    constructor(
        public bank_name:string,
        public bank_address:string,
        public bank_branch:string,
        public account_number:string,
        public IFSC_code:string,
        public amount?:number,
        public amount_USD?:number
    ){
        
    }
}