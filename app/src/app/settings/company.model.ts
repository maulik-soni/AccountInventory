

export class CompanyProfile {
    constructor(
        public id:number,
        public c_name:string,
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


export const CompanyTitles=[
    ['name','c_name'],
    ['GST','GST'],
    ['phone','phone'],
    ['mobile','mobile'],
    ['PAN','PAN'],
    ['email','email']]