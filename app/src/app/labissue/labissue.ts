export class LabIssue { 
    constructor( 
        public PCS_ID?:number,
        public size?:string,
        public shape?:string,
        public carat?:number,
        public color?:string,
        public clarity?:string,
        public rate?:number,
        public invoice_number?: number, 
        public client_ref_num?:string,
        public date?:string,
        public service?:string,
        public diameter?:number,
        public height?:number,
        public amount?:number,
    ) {} 
}