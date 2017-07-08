export class PaymentReciept{
    constructor(
        public date:String,
        public by:String,
        public type:String,
        public to:String,
        public bill:String,
        public currency:String,
        public payment:String,
        public amount:number
    ){}
}

export class Options{
    constructor(
        public by:Array<String>,
        public type:Array<String>,
        public bill:Array<String>,
        public currency:Array<String>,
        public payment:Array<String>
    ){
        
    }
}