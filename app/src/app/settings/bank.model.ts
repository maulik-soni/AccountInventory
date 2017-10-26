export class Bank{
    constructor(
        public id:number,
        public bank_name:string,
        public bank_address:string,
        public bank_branch:string,
        public account_number:string,
        public IFSC_code:string,
        public opening_balance:number,
        public amount?:number,
        public amount_USD?:number,
    ){
        
    }
}

export class VendorBank{
    constructor(
        public id:number,
        public bank_name:string,
        public bank_address:string,
        public bank_branch:string,
        public account_number:string,
        public IFSC_code:string,
    ){}

}

export const BankTitles=[
    ['name','bank_name'],
    ['address','bank_address'],
    ['branch','bank_branch'],
    ['opening balance','opening_balance'],
    ['account number','account_number'],
    ['IFSC','IFSC_code'],
    ['amount','amount']]

export const VendorBankTitles=[
    ['name','bank_name'],
    ['address','bank_address'],
    ['branch','bank_branch'],
    ['account number','account_number'],
    ['IFSC','IFSC_code']]