export class LabIssue { 
    constructor( 
        public invoice_number?:string,
        public Stock_ID?:number,
        public size?:string,
        public shape?:string,
        public carat?:number,
        public color?:string,
        public clarity?:string,
        public date?:string,
        public service?:string,
        public diameter?:number,
        public height?:number,
        public amount?:number,
        public LAB_type?:string
       
    ) {} 
}