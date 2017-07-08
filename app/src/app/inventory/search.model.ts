export class SearchValues{
    constructor(
        public filter:String,
        public filterby?:String
    ){}
}

export class SearchOptions{
    constructor(
        public filter:Array<String>,
        public filterby:Array<String>
    ){}
}