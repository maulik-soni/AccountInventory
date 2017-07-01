export class cashbook{
    constructor(
        public amount:number,
        public voucher:string,
        public type:string,
        public date:string,
        public description?:string
    ){}
}