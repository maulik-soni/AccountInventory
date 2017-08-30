

export class CompanyProfile {
    constructor(
        public c_name:string,
        public id:number,
        public address:string,
        public from:Date,
        public to:Date,
        public GST:string,
        public PAN:string,
        public IEC:string,
        public QBC:string,
        public phone?:string,
        public mobile?:string,
        public email?:string,
    ){}
}
