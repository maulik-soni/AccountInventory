export class Vendor{
    constructor(
        public id:number,
        public v_name:string,
        public account_code:string,
        public address:string,
        public country:string,
        public fax_number:string,
        public RAP:string,
        public IDEX:string,
        public diamond_world_id:string,
        public QBC:string,
        public credit_limit:number,
        public credit_limit_USD:number,
        public GST:string,
        public PAN:string,
        public remarks?:string,
        public reference_1?:string,
        public reference_2?:string,
        public website?:string,
        public contact_person?:string,
        public opening_bal_USD?:number,
        public opening_bal?:number,
        public phone?:string,
        public mobile?:string,
        public email?:string
    ){}
}

export const VendorTitles=[
    ['name','v_name'],
    ['account code','account_code'],
    ['phone','phone'],
    ['mobile','mobile'],
    ['website','website'],
    ['credit limit','credit_limit']]
