export class cashbook{
    constructor(
        public amount:number,
        public voucher:string,
        public type:string,
        public date:string,
        public company_name:string,
        public transaction_mode:string,
        public description?:string,
        public bank?:string,
        public bank_branch?:string,
        public account_number?:number,
        public cheque_no?:string,
        public transaction_id?:string,
    ){}
}

export class options{
    constructor(
        public company_name:Array<string>,
        public transaction_mode:Array<string>,
        public bank:Array<string>,
        public bank_branch:Array<string>,
        public account_number:Array<number>,
    ){

    }
}