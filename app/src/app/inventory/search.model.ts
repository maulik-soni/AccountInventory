export class SearchValues{
    constructor(
        public inventory:String,
        public filterby?:String
    ){}
}

export class SearchOptions{
    constructor(
        public inventory:Array<String>,
        public filterby:Array<String>
    ){}
}